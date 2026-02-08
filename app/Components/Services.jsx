// import { FaHospital, FaIndustry, FaHotel, FaUserTie } from 'react-icons/fa';

// export default function Services() {
//   const services = [
//     {
//       icon: <FaHospital className="text-4xl text-blue-600" />,
//       title: "Hospital Wears",
//       description: "High-quality medical uniforms and linens for healthcare professionals"
//     },
//     {
//       icon: <FaIndustry className="text-4xl text-blue-600" />,
//       title: "Industrial Wears",
//       description: "Durable workwear for industrial environments with safety features"
//     },
//     {
//       icon: <FaHotel className="text-4xl text-blue-600" />,
//       title: "Hotel Wears",
//       description: "Elegant uniforms for hospitality staff with custom designs"
//     },
//     {
//       icon: <FaUserTie className="text-4xl text-blue-600" />,
//       title: "Corporate Wears",
//       description: "Professional uniforms for corporate identity and branding"
//     }
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
//           <p className="text-gray-600 max-w-3xl mx-auto">
//             We provide a diverse range of fabrics, hospital linen, corporate uniforms/aprons and more for all types of jobs with extensive customization options.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
//               <div className="flex justify-center mb-6">
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
//               <p className="text-gray-600 text-center">{service.description}</p>
//             </div>
//           ))}
//         </div>
        
//         <div className="mt-12 bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-8 text-white">
//           <div className="max-w-3xl mx-auto text-center">
//             <h3 className="text-2xl font-bold mb-4">Customization Options</h3>
//             <p className="mb-6">
//               Create a distinctive brand identity for your company with extensive customization options including embroidering and screen printing on all our fabrics and uniforms.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <span className="bg-blue-700 px-4 py-2 rounded-full">Embroidering</span>
//               <span className="bg-blue-700 px-4 py-2 rounded-full">Screen Printing</span>
//               <span className="bg-blue-700 px-4 py-2 rounded-full">Custom Designs</span>
//               <span className="bg-blue-700 px-4 py-2 rounded-full">Brand Logos</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }