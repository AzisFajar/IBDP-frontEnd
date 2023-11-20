import Layout from "../components/Layouts/Layout"
import imgartikel from "../assets/img/artikel.svg"

const ArtikePage = () => {
    return (
        <Layout>
            <div className="flex justify-center items-center p-8 m-8 rounded-lg">
                <img
                src={imgartikel}
                alt=""
                className="object-cover object-top w-full h-80 rounded-lg"
                />
            </div>
            <div className="flex flex-col justify-center items-start px-11 mx-11">
                <div className="text-justify items-start rounded-lg">
                </div>
                <h2 className="text-xl font-bold pt-6 pb-6">             
                Keterbatasan Informasi Jadi Hambatan Orang untuk Donor Darah
                </h2>
            </div>
            <div className="flex flex-col justify-center px-11 mx-11">
                <hr className="border border-black mt-4 mb-4" />
                <p className="text-justify mt-4">
                Partisipasi masyarakat untuk donor darah masih rendah. Aspek informasi dan syarat kebugaran menjadi alasan dan tantangan memenuhi kecukupan stok darah.
                </p>
                <p className="text-justify mt-4">
                Gambaran partisipasi masyarakat mendonorkan darah terlihat dari hasil jajak pendapat Kompas pada Mei 2021. Sebanyak 25,2 persen responden pernah donor darah. Umumnya mereka mendonorkan darah ketika dibutuhkan kerabat (10,6 persen) atau saat ada penggalangan donor darah (10,3 persen). Sementara responden yang secara rutin mendonorkan darah sendiri baru 4,3 persen.
                </p>
                <p className="text-justify mt-4">
                Semua generasi dari muda sampai tua turut andil dalam aksi untuk menyelamatkan jutaan nyawa ini. Hampir separuh responden yang rutin donor darah adalah mereka yang berusia di bawah 30 tahun. Di sisi lain, 60 persen dari donor untuk kebutuhan yang sifatnya mendadak dilakukan responden berusia di atas 53 tahun.
                </p>
                <p className="text-justify mt-4">
                Karakter yang berbeda juga ditemukan antara laki-laki dan perempuan. Lebih banyak laki-laki yang pernah mendonorkan darah dibandingkan perempuan. Dari total responden yang pernah menyumbang darah, tiga perempat merupakan laki-laki, seperempatnya perempuan.
                </p>
                <p className="text-justify mt-4">
                Rendahnya partisipasi perempuan dapat disebabkan oleh dua aspek. Pertama, perempuan terbentur pada syarat-syarat yang lebih banyak dibandingkan laki-laki. Palang Merah Indonesia (PMI) menyebutkan, perempuan hamil atau sedang menyusui untuk sementara waktu tidak dapat menjadi donor. Kedua, masih abu-abunya informasi, misalnya saja boleh atau tidaknya perempuan melakukan donor darah ketika sedang dalam siklus menstruasi. Kondisi biologis perempuan yang berbeda dengan laki-laki membutuhkan lebih banyak ulasan literasi terkait donor darah ini.
                </p>
            </div>
        </Layout>
    )
}

export default ArtikePage