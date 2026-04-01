import Image from 'next/image'
import image1 from "../public/gallary/gallary1.jpg"
import image2 from "../public/gallary/gallary2.jpg"
import image3 from "../public/gallary/gallary3.jpg"
import image4 from "../public/gallary/gallary4.jpg"
import { Reveal } from './Animations'

const MilitaryGallery = () => {
    return (
        <section className="bg-brand-bg-pink px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-155">
                    <Reveal delay={100}>
                        <p className="inline-flex rounded-full border border-brand-secondary px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black"> Operational Scenarios </p>
                    </Reveal>
                    <Reveal delay={200}>
                        <h2 className="mb-8 text-4xl font-black leading-tight text-black md:mb-12 md:text-6xl">
                            Mission Use Cases
                        </h2>
                    </Reveal>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-6">

                    {/* Large Image */}
                    <Reveal delay={300} className="relative group overflow-hidden rounded-2xl">
                        <Image
                            src={image1}
                            alt="military helicopter"
                            loading="eager"
                            sizes="(max-width: 1279px) 100vw, 33vw"
                            className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute bottom-4 left-4 text-white text-sm bg-black/40 px-3 py-1 rounded-md backdrop-blur">
                            Aerial Reconnaissance
                        </div>
                    </Reveal>

                    {/* Bottom Images */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Left Image */}
                        <Reveal delay={400} className="relative group overflow-hidden rounded-2xl">
                            <Image
                                src={image4}
                                alt="military soldiers"
                                loading="eager"
                                sizes="(max-width: 1279px) 100vw, 33vw"
                                className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div className="absolute bottom-4 left-4 text-white text-sm bg-black/40 px-3 py-1 rounded-md backdrop-blur">
                                Ground Force Support
                            </div>
                        </Reveal>

                        {/* Right Image */}
                        <Reveal delay={500} className="relative group overflow-hidden rounded-2xl">
                            <Image
                                src={image3}
                                alt="fighter jet"
                                loading="eager"
                                sizes="(max-width: 1279px) 100vw, 33vw"
                                className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div className="absolute bottom-4 left-4 text-white text-sm bg-black/40 px-3 py-1 rounded-md backdrop-blur">
                                Airspace Monitoring
                            </div>
                        </Reveal>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default MilitaryGallery
