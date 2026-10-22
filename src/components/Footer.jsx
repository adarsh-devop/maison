export const Footer = () => {
    
    return (
<div className=" gap-10 bg-[#7f011f] text-white py-12 px-8 " >

    <div className="flex flex-col items-center border-b border-white pb-10">
        <p>maison</p>
        <p className="mt-5">Time style.effortless elegance</p>
    </div>

    <div className="flex justify-around mt-10 gap-10"> 
        <div >
            <p>Explore</p>
            <p>Home</p>
            <p>Shop</p>
            <p>About us </p>
            <p>Contact</p>
        </div>
        <div>
            <p>Customer Car</p>
            <p>Shipping & Retuns</p>
            <p>FAQs</p>
            <p>Privacy policy</p>
            <p>Terms & Conditions</p>
        </div>
    </div>
</div>
    )
}