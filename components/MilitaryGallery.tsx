import Image from 'next/image'
import image1 from "../public/gallary/gallary1.jpg"
import image2 from "../public/gallary/gallary2.jpg"
import image3 from "../public/gallary/gallary3.jpg"
import image4 from "../public/gallary/gallary4.jpg"

const MilitaryGallery = () => {
    return (
        <section className="bg-[#fdf9fa] px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-155">
                    <p className="inline-flex rounded-full border border-[#d8b6c8] px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black"> Showcase </p>
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 md:mb-12">
                        Perspectives
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-6">

                    {/* Large Image */}
                    <div className="relative group overflow-hidden rounded-2xl">
                        <Image
                            src={image1}
                            alt="military helicopter"
                            className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute bottom-4 left-4 text-white text-sm bg-black/40 px-3 py-1 rounded-md backdrop-blur">
                            Recon Aerial View
                        </div>
                    </div>

                    {/* Bottom Images */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Left Image */}
                        <div className="relative group overflow-hidden rounded-2xl">
                            <Image
                                src={image4}
                                alt="military soldiers"
                                className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div className="absolute bottom-4 left-4 text-white text-sm bg-black/40 px-3 py-1 rounded-md backdrop-blur">
                                Tactical Unit
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative group overflow-hidden rounded-2xl">
                            <Image
                                src={image3}
                                alt="fighter jet"
                                className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div className="absolute bottom-4 left-4 text-white text-sm bg-black/40 px-3 py-1 rounded-md backdrop-blur">
                                Air Support
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default MilitaryGallery