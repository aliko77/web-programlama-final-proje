export const Testimonials = () => {
  const _reviews = [
    {
      name: "Ali Koç",
      text: "Unlu mamullerin genel kalitesi oldukça iyi. Denediğim her şey lezzetli ve tazeydi.",
      photo: "ali.png",
    },
    {
      name: "Umut Altıok",
      text: "Kısa süre önce arkadaşım için özel bir pasta sipariş ettim ve çok memnun kaldım.",
      photo: "brusk.png",
    },
    {
      name: "Nurettin Kılınç",
      text: "Yavaş bir sabah kahvesinin tadını çıkarmak veya öğleden sonra tatlı bir ikramla gevşemek için mükemmel bir tercih.",
      photo: "nuro.png",
    },
    {
      name: "Buğra Cihan",
      text: "Kruvasanlar lapa lapa ve tereyağlı, çikolatalı kek zengin ve hoşgörülü, kurabiyeler ise mükemmel derecede çiğnenebilir. Yüksek kaliteli malzemeler kullandıkları ve fırıncılık işlerine büyük özen gösterdikleri çok açık.",
      photo: "bugra.png",
    },
  ];

  return (
    <>
      <div className="w-full bg-fff3d6">
        <div className="w-full flex flex-col items-center justify-center pb-20">
          <div className="py-10 text-center flex flex-col gap-6">
            <h1 className="text-5fcac7 font-medium text-xl italic">Görüşler</h1>
            <h1 className="text-574c44 text-3xl font-bold">
              Müşterilerimizden Gelen Yorumlar
            </h1>
          </div>
          <div className="py-5 grid lg:grid-cols-3 gap-3">
            {_reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-[10px_20px_20px] w-72 h-min"
              >
                <p className="text-[#535353] my-2.5">"{review.text}"</p>
                <div className="mt-5 flex">
                  <div className="w-11 h-11 mr-4">
                    <img
                      className="object-cover rounded-[50%] w-full h-full"
                      src={`images/profile_photos/${review.photo}`}
                      alt="review_profile"
                    />
                  </div>
                  <div className="flex justify-center flex-col">
                    <h1 className="font-bold text-574c44">{review.name}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
