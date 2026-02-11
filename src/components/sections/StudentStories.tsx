import { motion } from "framer-motion";
import { useState } from "react";
import { Quote, Play, MapPin, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui";

// REPLACE THESE WITH YOUR ACTUAL STUDENT PHOTOS AND STORIES
// export function StudentStories() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedStory, setSelectedStory] = useState(null);
//
//   const nextStory = () => {
//     setCurrentIndex((prev) => (prev + 1) % studentStories.length);
//   };
//
//   const prevStory = () => {
//     setCurrentIndex((prev) => (prev - 1 + studentStories.length) % studentStories.length);
//   };
//
//   const currentStory = studentStories[currentIndex];
//
//   return (
//     <section className="bg-white py-20 lg:py-28 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           className="mx-auto max-w-3xl text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
//             Success Stories
//           </span>
//           <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Hear From Our Students
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Real stories from students who achieved their study abroad dreams with our guidance.
//             Join 10,000+ successful students worldwide.
//           </p>
//         </motion.div>
//
//         {/* Featured Story Carousel */}
//         <div className="relative mb-16">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.5 }}
//             className="relative"
//           >
//             <Card className="overflow-hidden shadow-2xl">
//               <div className="grid lg:grid-cols-2">
//                 {/* Student Image - REPLACE WITH YOUR IMAGES */}
//                 <div className="relative h-96 lg:h-auto">
//                   <img
//                     src={currentStory.coverImage}
//                     alt={currentStory.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                   
//                   {/* Video Play Button */}
//                   <motion.button
//                     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-6 shadow-2xl"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Play className="h-8 w-8 text-primary-600" fill="currentColor" />
//                   </motion.button>
//                   
//                   {/* Student Photo Badge */}
//                   <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
//                     <img
//                       src={currentStory.photo}
//                       alt={currentStory.name}
//                       className="w-12 h-12 rounded-full object-cover border-2 border-primary-600"
//                     />
//                     <div>
//                       <p className="font-semibold text-gray-900">{currentStory.name}</p>
//                       <p className="text-xs text-gray-600">{currentStory.university}</p>
//                     </div>
//                   </div>
//                 </div>
//
//                 {/* Story Content */}
//                 <div className="p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white">
//                   <Quote className="h-10 w-10 text-primary-600 mb-6" />
//                   
//                   <p className="text-xl text-gray-800 leading-relaxed mb-6 italic">
//                     "{currentStory.story}"
//                   </p>
//
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3">
//                       <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100">
//                         {/* flag removed */}
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">Studying in</p>
//                         <p className="font-semibold text-gray-900">{currentStory.country}</p>
//                       </div>
//                     </div>
//
//                     <div className="flex items-center gap-3">
//                       <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100">
//                         <GraduationCap className="h-5 w-5 text-primary-600" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">Program</p>
//                         <p className="font-semibold text-gray-900">{currentStory.course}</p>
//                       </div>
//                     </div>
//
//                     <div className="flex items-center gap-3">
//                       <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100">
//                         <MapPin className="h-5 w-5 text-primary-600" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">University</p>
//                         <p className="font-semibold text-gray-900">{currentStory.university}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </motion.div>
//
//           {/* Navigation Buttons */}
//           <motion.button
//             onClick={prevStory}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-colors"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <ChevronLeft className="h-6 w-6 text-gray-900" />
//           </motion.button>
//           <motion.button
//             onClick={nextStory}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-colors"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <ChevronRight className="h-6 w-6 text-gray-900" />
//           </motion.button>
//
//           {/* Dots Indicator */}
//           <div className="flex justify-center gap-2 mt-6">
//             {studentStories.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`h-2 rounded-full transition-all ${
//                   index === currentIndex
//                     ? 'w-8 bg-primary-600'
//                     : 'w-2 bg-gray-300 hover:bg-gray-400'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//
//         {/* Student Grid Gallery */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
//             More Success Stories
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {studentStories.map((student, index) => (
//               <motion.div
//                 key={student.id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="cursor-pointer"
//                 onClick={() => setCurrentIndex(index)}
//               >
//                 <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
//                   {/* REPLACE WITH YOUR STUDENT PHOTOS */}
//                   <img
//                     src={student.photo}
//                     alt={student.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity"></div>
//                   <div className="absolute bottom-0 left-0 right-0 p-3">
//                     <p className="text-white font-semibold text-sm">{student.name}</p>
//                     <p className="text-gray-200 text-xs flex items-center gap-1">
//                       {/* flag removed */}
//                       {student.country}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </motion.div>
//
//           {/* Navigation Buttons */}
//           <motion.button
//             onClick={prevStory}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-colors"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <ChevronLeft className="h-6 w-6 text-gray-900" />
//           </motion.button>
//           <motion.button
//             onClick={nextStory}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-colors"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <ChevronRight className="h-6 w-6 text-gray-900" />
//           </motion.button>
//
//           {/* Dots Indicator */}
//           <div className="flex justify-center gap-2 mt-6">
//             {studentStories.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`h-2 rounded-full transition-all ${
//                   index === currentIndex
//                     ? 'w-8 bg-primary-600'
//                     : 'w-2 bg-gray-300 hover:bg-gray-400'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//
//         {/* Student Grid Gallery */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
//             More Success Stories
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {studentStories.map((student, index) => (
//               <motion.div
//                 key={student.id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="cursor-pointer"
//                 onClick={() => setCurrentIndex(index)}
//               >
//                 <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
//                   {/* REPLACE WITH YOUR STUDENT PHOTOS */}
//                   <img
//                     src={student.photo}
//                     alt={student.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity"></div>
//                   <div className="absolute bottom-0 left-0 right-0 p-3">
//                     <p className="text-white font-semibold text-sm">{student.name}</p>
//                     <p className="text-gray-200 text-xs flex items-center gap-1">
//                       <span>{student.flag}</span>
//                                            {/* flag removed */}
//                       {student.country}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

