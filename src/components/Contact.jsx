import React from 'react'

const Contact = () => {
  return (
    <div class="max-w-xl mx-auto p-8 ">
    <h2 class="text-2xl font-semibold m-4 p-2">Contact Us</h2>
    
    <div class="m-4 p-2 flex gap-4">
      <p class="text-lg mb-2">Email:</p>
      <a href="mailto:support@example.com" class="text-blue-600 hover:underline text-lg">support@example.com</a>
    </div>
    
    <div class="m-4 flex gap-4">
      <p class="text-lg mb-2">Feedback Form:</p>
      <a href="#" class="text-blue-600 hover:underline text-lg">Provide feedback</a>
    </div>
    
    <div class="m-4  gap-4 flex">
      <p class="text-lg mb-2">Social Media:</p>
      <div class="flex space-x-4 text-lg">
        <a href="https://twitter.com/YourApp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://facebook.com/YourApp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com/YourApp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
    
    <p class="text-lg">Our support team operates Monday to Friday, 9:00 AM to 5:00 PM (GMT). We'll do our best to respond to your inquiries promptly.</p>
  </div>
  
  )
}

export default Contact