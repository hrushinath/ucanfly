import { useState, useEffect } from "react";
import { Star, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui";

export function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGoogleReviews();
  }, []);

  const fetchGoogleReviews = async () => {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      setError("Google API configuration is missing. Please check your environment variables.");
      setLoading(false);
      return;
    }

    try {
      // Using the new Places API (New) endpoint
      const response = await fetch(
        `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,displayName,googleMapsUri&key=${apiKey}`,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch reviews: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (data.reviews && data.reviews.length > 0) {
        // Sort by most recent and take top 5
        const sortedReviews = data.reviews
          .sort((a, b) => new Date(b.publishTime) - new Date(a.publishTime))
          .slice(0, 5)
          .map(review => ({
            authorName: review.authorAttribution?.displayName || 'Anonymous',
            authorPhoto: review.authorAttribution?.photoUri || null,
            rating: review.rating || 5,
            text: review.text?.text || review.originalText?.text || '',
            relativeTime: review.relativePublishTimeDescription || '',
            time: review.publishTime || '',
            profileUrl: review.authorAttribution?.uri || data.googleMapsUri || '#'
          }));

        setReviews(sortedReviews);
      } else {
        setError("No reviews available at the moment.");
      }
    } catch (err) {
      console.error("Error fetching Google reviews:", err);
      setError(err.message || "Unable to load reviews. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  const formatDate = (relativeTime, isoTime) => {
    if (relativeTime) return relativeTime;
    if (isoTime) {
      const date = new Date(isoTime);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    }
    return '';
  };

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Google Reviews
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say on Google
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real reviews from real customers. See what people are saying about their experience with us.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-16 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="h-10 w-10 animate-spin text-primary-600" />
              <p className="text-gray-600">Loading reviews...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="mt-16">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="flex items-center gap-3 p-6">
                <AlertCircle className="h-6 w-6 flex-shrink-0 text-red-600" />
                <div>
                  <p className="font-medium text-red-900">Unable to load reviews</p>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Reviews Grid */}
        {!loading && !error && reviews.length > 0 && (
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    {review.authorPhoto ? (
                      <img
                        src={review.authorPhoto}
                        alt={review.authorName}
                        className="h-12 w-12 rounded-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-semibold">
                        {review.authorName.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 truncate">
                        {review.authorName}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex gap-0.5">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-4">
                    {review.text || "No review text provided."}
                  </p>

                  {/* Footer with Date and Link */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-xs text-gray-500">
                      {formatDate(review.relativeTime, review.time)}
                    </span>
                    <a
                      href={review.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      View on Google
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* View All Reviews Link */}
        {!loading && !error && reviews.length > 0 && (
          <div className="mt-12 text-center">
            <a
              href={`https://search.google.com/local/reviews?placeid=${import.meta.env.VITE_GOOGLE_PLACE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-700 hover:shadow-lg"
            >
              View All Google Reviews
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

