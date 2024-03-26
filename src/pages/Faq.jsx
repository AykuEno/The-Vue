import React, { useState } from 'react';
import {
  Image, 
} from 'react-bootstrap';


export default function Faq() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='m-5'>
      <span className='text-[30px] w-full text-center'>FAQ</span>
      <div className='my-2'>
        <span className='text-2 sm:text-[20px] underline'>TLé VUE CONTACT INFORMATION CONTACT TLé VUE BY PHONE OR EMAIL</span>
        <p className='text-[15px]'>Please contact our client services department at +1.858.899.8088 if you require any additional information or assistance, and one of our expert advisors will gladly assist you. 
          You can, on the other hand, contact them at any moment via email using the contact form.<br/>
          Ø TLé VUE does not deliver to APO, FPO, DPO, nor PO boxes.
        </p>
      </div>
      <div className='my-2'>
        <span className='text-2 sm:text-[20px] underline'>OUR PRODUCTS</span>
        <p className='text-[15px]'>The use of the best materials, skilled artisans, and meticulous attention to all production phases of our products preserves and renews the culture of quality and refinement in all our workplaces.
          Ø If you want further information regarding TLé VUE products, please contact us. <br/>
          -Please contact our client services department by email or phone at +1.858.899.8088, and one of our advisers would be delighted to help you.<br/>
          Ø TLé VUE maintenance recommendations may be found under the product care link on each product page.<br/>
          Ø TLé VUE aromatic and deluxe are produced in a workshop located in China and France. <br/>
          Ø TLé VUE poultry produced and sold solely in Nigeria.  
        </p>
      </div>
      <div className='my-2'>
        <span className='text-2 sm:text-[20px] underline'>ONLINE OR PHONE PURCHASE </span>
        <p className='text-[15px]'>PAYMENT<br/>
          ·      Every transaction is encrypted. To secure personal and financial data, the TLé VUE website uses an SSL encryption technology. <br/>
          ·      No credit card information is stored by TLé VUE.<br/>
          ·      Please be aware that we will never ask clients to validate their account or payment card information through email.<br/>
          <br/>
          Ø Placing and Order by phone or Need advice? <br/>
          ·      Our advisers are available to assist you. Client services may be reached by email or phone from 8 a.m. to 8 p.m. Monday through Friday; 9 a.m. to 5 p.m. Saturday and Sunday.<br/>
          ·      Orders are only retained in carts for a limited time.<br/>
          ·      Credit cards, debit cards, PayPal, and Apple Pay are all acceptable methods of payment.<br/>
          ·      Visa, American Express, MasterCard, and Discover are all accepted credit cards.<br/>
          <br/>
          Ø BULK ORDERS<br/>
          ·      In your email please include the following: <br/>
          1.	Contact name:<br/>
          2.	Company: <br/>
          3.	Email:<br/>
          4.	Phone:<br/>
          5.	Product(s) interested in:<br/>
          6.	Estimated quantities:<br/>
          7.	Personalized customization:<br/>
          Ø GIFT <br/>
          ·      You may order TLé VUE gifts via our website or Client Services and have them delivered straight to the receiver.<br/>
          ·      When making your order, you will be able to customize the message along with the gift and choose the shipping address. ·      A Client Service representative may contact you regarding your order in order to assure great service.<br/>
          Ø TLé VUE does not deliver to APO, FPO, DPO, nor PO boxes.<br/>
        </p>
      </div>
      <div className='my-2'>
        <span className='text-2 sm:text-[20px] underline'>Join US</span>
        <p className='text-[15px]'>Ø What Is a MyTLéVUE account?<br/>
            ·      By registering for an account, you will be able to track your online orders, view your purchase history, and print e-receipts.<br/>
            ·      Allow you to manage your personal information.<br/>
            ·      Opt-in/opt-out for TLé VUE communications<br/>
            ·      Make your own Wishlist, which you can access from any computer or mobile device.<br/>
            <br/>
            Ø GUEST<br/>
            ·      Track your orders using information provided in the confirmation email.
 
        </p>
      </div>
      <div className='my-2'>
        <span className='text-2 sm:text-[20px] underline'>REMAIN UP TO DATE</span>
        <p className='text-[15px]'>Ø TLé VUE ensures authenticity with an innovative online distribution strategy. Only our website TLé VUE.com and our physical Steading presence located in Aremu Omi Adio, in Ibadan Oyo State, for your convenience of TLé VUE items.<br/>
            Ø You will be among the first to learn about new products, events, and news if you subscribe to TLéVUE communications.<br/>
            Please contact our Client Services at +1.858.899.8088 if you require any further information about what you're interested in.
        </p>
      </div>
      <div className='my-2'>
        <span className='text-2 sm:text-[20px] underline'>DELIVERY AND RETURNS</span>
        <p className='text-[15px]'>We hope you like your new TLé VUE as much as we do. Ø DELIVERY<br/>
          ·    TLé  VUE FACTS<br/>
          ¨    It's likely that orders will take 24 to 36 hours to process. You will get an email confirmation of your processed order after your purchase has been completed. Keep in mind that the delivery term and time start when you receive the shipping confirmation email. All shipments of $50 or more require a signature.<br/>
          ¨    If extra validation is needed, please bear in mind that order shipment may be delayed.<br/>
          ¨     Log in to your MyTLéVUE account to track your shipment or refer to the shipping confirmation email for further information.<br/>
          ·     STANDARD<br/>
          ¨    Fee: complimentary to all orders delivery timing: 2-5 business days from the time you receive shipping confirmation email.<br/>
          ¨    Exception: The earliest shipment for a standard order placed over the weekend would be Monday. Due keep in mind, extra validation requirements may will cause order to be delayed.  <br/>
          ¨    Alaska, Hawaii and International: Allow 5-7 business days from the time you receive shipping confirmation email. For expedited delivery, we would advise you choose express shipping. ·     EXPRESS<br/>
          ¨    Fee: $20 for all orders under $400; Complimentary for orders $400 and above.<br/>
          ¨    Delivery Timing: 1-4 business days from the time you receive the shipping confirmation email. <br/>
          ¨    Exceptions: if an order is placed on Friday or over the weekend, the earliest it will ship is Monday. Some zip codes are not available for this service. Additional validation is subject to be required and could cause order delay.<br/>
          ·     OVERNIGHT AND SAME DAY <br/>
          ¨    Fee: $40 for all orders under $700; complimentary for orders $700 and above.<br/>
          ¨    Delivery Timing: Orders placed by 3pm [GMT] [ET] Monday-Friday or by 12pm [GMT] [ET] Saturday should arrive the following business day. If the order is placed after these times, it will be processed the following day. Orders placed after cut-off on Weekends or Holidays will be processed the following business Some zip codes are not available for this service. Additional validation may be required for all orders and can delay delivery.day.<br/>
          Ø RETURNS AND EXCHANGES<br/>
          ·      POLICY<br/>
          ¨    Depending on the item, returns and exchanges are free up to 15 days of delivery. It is critical that the products be in pristine perfect, sellable condition. Items are to be sent in its original packaging. Customized or made-to-order items are not eligible for refunds or exchanges.  For hygienic concerns, wearable products cannot be returned or replaced. Purchases made with PayPal or Apple Pay can be returned online or exchanged for a VUE credit.<br/>
          ¨    Refunds are issued in the same manner as they were received. Allow up to 10 business days for your credit card refund to be processed.<br/>
          <br/>
          ·     RETURNS<br/>
          ¨    Connect to your MyTLéVUE account to register your returns online or contact client services (1.858.899.8088).<br/>
          ¨    The information supplied in the confirmation email can be used to monitor returns.<br/>
          ¨    PREPARE YOUR PACKAGE: Ensure that all products are in their original packaging and include the original receipt. Wearing, washing, or tampering with the package is prohibited.<br/>
          Ø TLé VUE does not deliver to APO, FPO, DPO, nor PO boxes.

        </p>
      </div>
      <div className='my-2'>
        <span className='text-2 sm:text-[20px] underline'>PRODUCT CARE AND REPAIRS</span>
        <p className='text-[15px]'>Welcome to TLé VUE, where we care about our clients' experiences. Our goods are created to the greatest quality and competence standards, which are a genuine trademark of our company.<br/>
          §  VUE products are built to the highest standards and with proper care, should offer clients with many years of enjoyment. If your item exhibits a fault that is particularly connected to the way it was made, we do give gratis repairs or other fixes depending on the specific evaluations of your item. §  SHIP YOUR REPAIRS<br/>
          Our customer service staff will gladly supply you with all the information you need to submit your products to TLé VUE for repair or exchange. For help, please contact us at 
        </p>
      </div>
    </div>
  );
}
