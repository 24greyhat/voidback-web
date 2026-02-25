import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function DatasetRequestSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactEmail: '',
    datasetType: '2d',
    mediaFormat: 'image',
    quantity: '',
    description: '',
    budget: '',
    timeline: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send to backend
    console.log('Dataset request submitted:', formData);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        companyName: '',
        contactEmail: '',
        datasetType: '2d',
        mediaFormat: 'image',
        quantity: '',
        description: '',
        budget: '',
        timeline: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Request Custom Datasets
          </h2>
          <div className="h-[1px] w-24 bg-white mx-auto mb-8" />
          <p className="text-xl text-white font-serif max-w-3xl mx-auto leading-relaxed">
            Submit specifications for proprietary datasets. Our network of annotators will receive your requirements 
            and submit proposals with timelines and quotes.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border-2 border-white bg-black p-12 text-center"
          >
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Request Submitted
            </h3>
            <p className="text-white font-serif text-lg">
              Our institutional team will review your requirements and connect you with qualified annotators within 48 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-2 border-white bg-black p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="companyName" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider font-serif">
                  Company Name*
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-white bg-black text-white font-serif focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
                  placeholder="Acme AI Corporation"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactEmail" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider font-serif">
                  Contact Email*
                </label>
                <input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-white bg-black text-white font-serif focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
                  placeholder="procurement@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="datasetType" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider font-serif">
                  Dataset Type*
                </label>
                <select
                  id="datasetType"
                  name="datasetType"
                  value={formData.datasetType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-white bg-black text-white font-serif focus:outline-none focus:ring-2 focus:ring-white"
                  required
                >
                  <option value="2d">2D</option>
                  <option value="3d">3D</option>
                  <option value="mixed">Mixed 2D/3D</option>
                </select>
              </div>

              <div>
                <label htmlFor="mediaFormat" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider font-serif">
                  Media Format*
                </label>
                <select
                  id="mediaFormat"
                  name="mediaFormat"
                  value={formData.mediaFormat}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-white bg-black text-white font-serif focus:outline-none focus:ring-2 focus:ring-white"
                  required
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                  <option value="both">Image & Video</option>
                </select>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider font-serif">
                  Quantity (Images/Frames)*
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-white bg-black text-white font-serif focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
                  placeholder="10000"
                  required
                  min="1"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider font-serif">
                  Budget (USD)*
                </label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-white bg-black text-white font-serif focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
                  placeholder="$50,000 - $100,000"
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="timeline" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider font-serif">
                Delivery Timeline*
              </label>
              <input
                id="timeline"
                name="timeline"
                type="text"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-white bg-black text-white font-serif focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
                placeholder="Q2 2026 (within 60 days)"
                required
              />
            </div>

            <div className="mb-8">
              <label htmlFor="description" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider font-serif">
                Dataset Description & Requirements*
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border-2 border-white bg-black text-white font-serif focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500 resize-none"
                placeholder="Detailed requirements: object classes, annotation specifications, quality standards, delivery format, etc."
                required
              />
            </div>

            <div className="border-t border-white pt-6 mb-8">
              <p className="text-sm text-white font-serif leading-relaxed">
                <strong>Note:</strong> All dataset requests undergo institutional compliance review. 
                Budget verification and NDA execution required before matching with annotators. 
                Voidback charges 20% commission on successful project completion.
              </p>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-white text-black border-2 border-white hover:bg-black hover:text-white transition-all font-serif text-sm uppercase tracking-wider"
            >
              <Send className="w-5 h-5" />
              Submit Request
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
