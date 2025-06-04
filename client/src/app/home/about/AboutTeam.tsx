import teamPic from "../../../assets/team1.jpg";

const AboutTeam = () => {
    return (
        <section className="bg-white border border-gray-200 rounded-md mx-4 md:mx-10 my-10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center w-full">
                {/* Text section */}
                <div className="p-8 md:p-16">
                    <h2 className="text-4xl font-serif text-gray-800 my-4">
                        Gặp Gỡ Team Ribbon Box
                    </h2>
                    <button className="border border-[#AD3542] px-6 py-3 mt-6 text-sm font-black text-[#AD3542] hover:bg-[#AD3542] hover:text-white transition">
                        GET TO KNOW US
                    </button>
                </div>

                {/* Image section */}
                <div className="w-full h-full">
                    <img
                        src={teamPic}
                        alt="Meet the Team"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
