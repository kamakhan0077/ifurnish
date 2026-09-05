import React, { useState } from 'react';
import { CartItem, OrderEnquiry } from '../types';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  Truck, 
  Banknote, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  User, 
  Mail, 
  Printer 
} from 'lucide-react';

interface OrderEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const OrderEnquiryModal: React.FC<OrderEnquiryModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  
  // Checkout Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postcode: '',
    region: 'England' as 'England' | 'Wales' | 'Glasgow Area',
    deliveryDate: '',
    instructions: '',
  });

  const [confirmedOrder, setConfirmedOrder] = useState<OrderEnquiry | null>(null);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.product.salePrice || item.product.price) * item.quantity,
    0
  );

  const assemblyTotal = cartItems.reduce(
    (sum, item) => sum + (item.includeAssembly ? item.product.assemblyFee * item.quantity : 0),
    0
  );

  const totalAmount = subtotal + assemblyTotal;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address || !formData.postcode) {
      alert('Please fill in all required contact and delivery details.');
      return;
    }

    const newOrder: OrderEnquiry = {
      orderId: `IF-${Math.floor(100000 + Math.random() * 900000)}`,
      customerName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      postcode: formData.postcode,
      region: formData.region,
      deliveryDate: formData.deliveryDate || 'To be scheduled with dispatch coordinator',
      specialInstructions: formData.instructions,
      items: [...cartItems],
      subtotal,
      assemblyTotal,
      deliveryFee: 0,
      totalAmount,
      paymentMethod: 'Cash on Delivery (COD)',
      status: 'Confirmed',
      createdAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    };

    setConfirmedOrder(newOrder);
    setStep('success');
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-2xl shadow-2xl overflow-hidden border border-[#E8B63D]/30 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#2B2B2B] text-white p-4 flex items-center justify-between border-b border-[#E8B63D]/30">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#E8B63D]" />
            <h2 className="text-base font-extrabold tracking-wide">
              {step === 'cart' && 'Your Order Enquiry Cart'}
              {step === 'checkout' && 'Cash on Delivery Booking'}
              {step === 'success' && 'Enquiry & COD Order Confirmed!'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: CART REVIEW */}
          {step === 'cart' && (
            <div>
              {cartItems.length === 0 ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#F5F1E8] text-[#8A5A2B] rounded-full flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-bold text-[#2B2B2B]">Your enquiry cart is empty</h3>
                  <p className="text-xs text-gray-500 max-w-md mx-auto">
                    Browse our Wardrobe Sets, Beds, and Sofas to add items to your Cash on Delivery order enquiry.
                  </p>
                  <button
                    onClick={onClose}
                    className="py-2.5 px-6 bg-[#E8B63D] hover:bg-[#F39A1F] text-[#2B2B2B] font-bold text-xs rounded-xl shadow-md"
                  >
                    Explore Furniture Collection
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-[#FAF8F3] p-3 rounded-xl border border-[#E8B63D]/20 text-xs flex items-center gap-2 text-[#8A5A2B] font-semibold">
                    <Banknote className="w-4 h-4 text-[#4CAF50] shrink-0" />
                    <span>Cash on Delivery Only. No payment required until furniture arrives at your home!</span>
                  </div>

                  {/* Cart Items List */}
                  <div className="space-y-3">
                    {cartItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-3 bg-white rounded-xl border border-gray-100 shadow-2xs"
                      >
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-lg shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-xs text-[#2B2B2B] truncate">{item.product.name}</h4>
                          <p className="text-[11px] text-gray-500">
                            Color: <span className="font-medium text-[#8A5A2B]">{item.selectedColor.name}</span>
                          </p>
                          {item.includeAssembly && (
                            <span className="text-[10px] text-[#4CAF50] font-bold block mt-0.5">
                              + Professional Room Assembly (£{item.product.assemblyFee})
                            </span>
                          )}
                          <p className="text-xs font-extrabold text-[#2B2B2B] mt-1">
                            £{(item.product.salePrice || item.product.price) * item.quantity}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1.5 bg-[#FAF8F3] p-1 rounded-lg border border-gray-200">
                          <button
                            onClick={() => onUpdateQuantity(idx, -1)}
                            className="w-6 h-6 flex items-center justify-center font-bold text-xs text-gray-600 hover:bg-white rounded"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold px-1.5">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(idx, 1)}
                            className="w-6 h-6 flex items-center justify-center font-bold text-xs text-gray-600 hover:bg-white rounded"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Item */}
                        <button
                          onClick={() => onRemoveItem(idx)}
                          className="p-1.5 text-gray-400 hover:text-[#E53935] transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="bg-[#FAF8F3] p-4 rounded-xl border border-gray-200 space-y-2 text-xs">
                    <div className="flex justify-between text-gray-600">
                      <span>Furniture Subtotal:</span>
                      <span className="font-bold text-[#2B2B2B]">£{subtotal}</span>
                    </div>
                    {assemblyTotal > 0 && (
                      <div className="flex justify-between text-gray-600">
                        <span>Assembly Services:</span>
                        <span className="font-bold text-[#2B2B2B]">£{assemblyTotal}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-[#4CAF50] font-bold">
                      <span>Delivery Fee (England, Wales & Glasgow):</span>
                      <span>FREE (£0.00)</span>
                    </div>
                    <div className="pt-2 border-t border-gray-300 flex justify-between text-sm font-extrabold text-[#2B2B2B]">
                      <span>Total Cash Due on Arrival:</span>
                      <span className="text-base text-[#8A5A2B]">£{totalAmount}</span>
                    </div>
                  </div>

                  {/* Proceed to Delivery Details */}
                  <button
                    onClick={() => setStep('checkout')}
                    className="w-full py-3 bg-[#E8B63D] hover:bg-[#F39A1F] text-[#2B2B2B] font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Delivery Details</span>
                    <Truck className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 2: DELIVERY DETAILS FORM */}
          {step === 'checkout' && (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div className="bg-[#F5F1E8] p-3 rounded-xl border border-[#E8B63D]/30 flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#8A5A2B]">Total Amount: £{totalAmount}</p>
                  <p className="text-[11px] text-gray-500">Payable via Cash on Delivery upon inspection</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep('cart')}
                  className="text-xs font-bold text-[#8A5A2B] underline hover:text-[#5C4033]"
                >
                  Edit Cart
                </button>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#2B2B2B] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#2B2B2B] mb-1">Phone Number (Required for Driver) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 07123 456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#2B2B2B] mb-1">Email Address (For Order Confirmation)</label>
                <input
                  type="email"
                  placeholder="e.g. john@example.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                />
              </div>

              {/* Address Details */}
              <div className="space-y-3">
                <div>
                  <label className="block font-bold text-[#2B2B2B] mb-1">Street Address *</label>
                  <input
                    type="text"
                    required
                    placeholder="House number & street name"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#2B2B2B] mb-1">Town / City *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Manchester, Cardiff, Glasgow"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#2B2B2B] mb-1">Postcode *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. M1 2WD"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs uppercase"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#2B2B2B] mb-1">Delivery Region (Free Delivery) *</label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value as any })}
                    className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs font-semibold text-[#8A5A2B]"
                  >
                    <option value="England">England (Free Delivery)</option>
                    <option value="Wales">Wales (Free Delivery)</option>
                    <option value="Glasgow Area">Glasgow Area, Scotland (Free Delivery)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Delivery & Instructions */}
              <div>
                <label className="block font-bold text-[#2B2B2B] mb-1">Preferred Delivery Date / Window</label>
                <input
                  type="text"
                  placeholder="e.g. Next Tuesday or Weekend morning"
                  value={formData.deliveryDate}
                  onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                  className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-[#2B2B2B] mb-1">Delivery Instructions (Floor, Lift, Parking)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. 2nd floor flat with lift access, gate code 1234"
                  value={formData.instructions}
                  onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                  className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                />
              </div>

              {/* Submit Order Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Confirm Cash on Delivery Order (£{totalAmount})</span>
              </button>
            </form>
          )}

          {/* STEP 3: SUCCESS CONFIRMATION RECEIPT */}
          {step === 'success' && confirmedOrder && (
            <div className="space-y-6 text-center py-2">
              <div className="w-16 h-16 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="bg-[#E8B63D] text-[#2B2B2B] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                  Order Reference: {confirmedOrder.orderId}
                </span>
                <h3 className="text-xl font-extrabold text-[#2B2B2B] mt-2">
                  Thank You, {confirmedOrder.customerName}!
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Your Cash on Delivery enquiry order has been booked successfully.
                </p>
              </div>

              {/* Summary Box */}
              <div className="bg-[#FAF8F3] p-4 rounded-xl border border-gray-200 text-left text-xs space-y-2">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Delivery Address:</span>
                  <span className="font-bold text-[#2B2B2B]">
                    {confirmedOrder.address}, {confirmedOrder.city}, {confirmedOrder.postcode} ({confirmedOrder.region})
                  </span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Contact Phone:</span>
                  <span className="font-bold text-[#2B2B2B]">{confirmedOrder.phone}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Payment Terms:</span>
                  <span className="font-bold text-[#4CAF50]">Cash on Delivery (£{confirmedOrder.totalAmount})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Delivery Status:</span>
                  <span className="font-bold text-[#8A5A2B]">Dispatch Coordinator Scheduling</span>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-[#FFFDF9] p-3 rounded-xl border border-[#E8B63D]/30 text-xs text-gray-600 text-left space-y-1">
                <p className="font-bold text-[#8A5A2B]">Next Steps:</p>
                <p>1. Our dispatch coordinator will call your phone number within 24 hours to confirm your delivery date.</p>
                <p>2. Drivers will bring furniture directly to your room of choice.</p>
                <p>3. Inspect your furniture before paying cash to driver.</p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => window.print()}
                  className="flex-1 py-2.5 bg-gray-200 hover:bg-gray-300 text-[#2B2B2B] font-bold text-xs rounded-xl flex items-center justify-center gap-1"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Receipt</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 bg-[#E8B63D] hover:bg-[#F39A1F] text-[#2B2B2B] font-bold text-xs rounded-xl"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
