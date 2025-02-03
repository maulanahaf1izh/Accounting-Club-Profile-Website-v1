const menu = document.querySelector("#nav.nav > .nav-menu");
const hamburgerMenu = document.querySelector("#nav.nav > .nav-hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const servicesGrid = document.querySelector(".services-grid");
const services = [
  {
    name: "Pembelajaran",
    description:
      "Pembelajaran dilakukan dengan 2 metode, yaitu luring yang dilakukan setiap hari Sabtu di beberapa tempat yang telah ditentukan, dan daring yang dilakukan setiap hari Minggu dengan menggunakan media komunikasi daring secara langsung. Peserta boleh memilih untuk mengikuti salah satunya, juga boleh mengikuti keduanya!",
  },

  {
    name: "Konsultasi",
    description:
      "Peserta diberikan kebebasan untuk menanyakan perihal tugas dari sekolah atau dari luar sekolah yang berhubungan dengan akuntansi kepada para mentor yang tersedia!",
  },

  {
    name: "Jalan-jalan",
    description:
      "Kegiatan berkeliling pada waktu tertentu yang diadakan setelah Ujian Akhir Semester guna memberikan rasa kebahagiaan kepada para peserta!",
  },

  {
    name: "Kunjungan ke Perguruan Tinggi",
    description:
      "Kegiatan berkunjung ke perguruan tinggi yang memiliki kejuruan akuntansi yang dilakukan setiap 2 kali pada 1 tahun pembelajaran agar para peserta memiliki motivasi besar untuk menjadi mahasiswa akuntansi dari suatu perguruan tinggi!",
  },

  {
    name: "Buka Puasa Bersama",
    description:
      "Kegiatan buka puasa bersama yang dilakukan di tengah-tengah bulan Romadhon demi menjaga keharmonisan di dalam!",
  },

  {
    name: "Wisuda",
    description:
      "  Kegiatan yang dilakukan pada akhir tahun pembelajaran Accounting Club yang diperuntukkan bagi peserta yang bertahan hingga akhir!",
  },
];
services.forEach((service) => {
  const serviceDiv = document.createElement("div");
  serviceDiv.innerHTML = `
  <img src="src/imgs/services/${service.name}.webp" alt="${service.name}" />
  <h5>${service.name}</h5>
  <p>
    ${service.description}
  </p>
  `;

  servicesGrid.appendChild(serviceDiv);
});

const teamsGrid = document.querySelector(".teams-grid");
const mentors = [
  {
    name: "Rizky Ramadhan",
    status: "Pegawai Perpajakan KPP Pratama Jakarta Penjaringan",
    instagram: "riz_ramadhan77",
  },

  {
    name: "Aditya Firmansyah",
    status: "Pegawai Keuangan PT Surya Citra Media TBK",
    instagram: "adityafidn",
  },

  {
    name: "Sonia Atikasari",
    status: "Mahasiswi Akuntansi Universitas Terbuka",
    instagram: "ticka_son",
  },

  {
    name: "Leni Sopia",
    status: "Mahasiswi Akuntansi Universitas Islam Negeri Jakarta",
    instagram: "lenisopia_",
  },

  {
    name: "Izmi Fadya Zahara",
    status: "Pegawai Akuntansi PT Geotech",
    instagram: "izmifadya",
  },

  {
    name: "Daffa Nur Arkan",
    status: "Mahasiswa Akuntansi Universitas Negeri Jakarta",
    instagram: "daffarkn",
  },

  {
    name: "Mohamad Adi Arul Alam",
    status: "Mahasiswa Akuntansi Universitas Negeri Jakarta",
    instagram: "adiarulalam_",
  },

  {
    name: "Abdan Faqih Izzudin",
    status: "Mahasiswa Akuntansi Universitas Negeri Jakarta",
    instagram: "abdanfqh",
  },

  {
    name: "Fadia Hamid",
    status: "Mahasiswi Akuntansi Universitas Negeri Jakarta",
    instagram: "fadiaiaa_",
  },

  {
    name: "Rahma Faizha",
    status: "Mahasiswi Pendidikan Akuntansi Universitas Negeri Jakarta",
    instagram: "rahmafzha_",
  },

  {
    name: "Nurul Putri Azzahra",
    status:
      "Mahasiswi Pendidikan Ekonomi Konsentrasi Pendidikan Akuntansi Universitas Negeri Jakarta",
    instagram: "nurulputrizr",
  },

  {
    name: "Devania Azzahra",
    status: "Mahasiswi Akuntansi Universitas Islam Negeri Jakarta",
    instagram: "devaniaazhr_",
  },

  {
    name: "Muhammad Raja Pandiangan",
    status: "Mahasiswa Akuntansi Sektor Publik Universitas Negeri Jakarta",
    instagram: "muhrajapand_",
  },

  {
    name: "Shabrina Nabilah Syofwan",
    status: "Mahasiswi Pendidikan Ekonomi Universitas Negeri Jakarta",
    instagram: "shabrinabilah_",
  },

  {
    name: "Tiara Damayanti",
    status: "Mahasiswi Pendidikan Ekonomi Universitas Negeri Jakarta",
    instagram: "tiara.dmynti",
  },

  {
    name: "Nathasa Diana Permatasari",
    status: "Mahasiswi Akuntansi Universitas Islam Negeri Jakarta",
    instagram: "nathasadps_",
  },

  {
    name: "Ahmad Yaasin Hafidz",
    status: "Mahasiswa Akuntansi Sektor Publik Universitas Negeri Jakarta",
    instagram: "amdysin",
  },

  {
    name: "Siddiqoh",
    status: "Mahasiswi Akuntansi Universitas Islam Negeri Jakarta",
    instagram: "sdiqoh_",
  },

  {
    name: "Sindy Fitria Saputri",
    status: "Mahasiswi Pendidikan Akuntansi Universitas Negeri Yogyakarta",
    instagram: "sind.dys",
  },

  {
    name: "Marsa Heldan Putri Ihsaniah",
    status: "Mahasiswi Akuntansi Universitas Indonesia",
    instagram: "marsyahldn_",
  },

  {
    name: "Diah Ayu Safitri",
    status: "Mahasiswi Akuntansi Universitas Sultan Ageng Tirtayasa",
    instagram: "whoisdiah_",
  },

  {
    name: "Bryan Maulana Ibrahim",
    status: "Mahasiswa Manajemen Universitas Islam Negeri Semarang",
    instagram: "bryanmaulana__",
  },
];
mentors.forEach((mentor) => {
  const mentorDiv = document.createElement("div");
  mentorDiv.innerHTML = `
  <img src="src/imgs/mentor/${mentor.name}.webp" alt="${mentor.name}" />
  <div>
    <p class="name">${mentor.name}</p>
    <p class="status">${mentor.status}</p>
    <a href="https://www.instagram.com/${mentor.instagram}" target="_blank">
      <svg fill="#FF0069" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Instagram</title>
        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
      </svg>
      <p>Instagram</p>
    </a>
  </div>
  `;

  teamsGrid.appendChild(mentorDiv);
});

const aboutContent2WrapGrid = document.querySelector(
  ".about-content-2-wrap-grid"
);
const places = [
  {
    name: "RPTRA Kejora",
    address:
      "Jl. Pembangunan II No.12 Bb, RT.9/RW.2, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10130",
    location: "FZ38TSRvyKq368w8A",
  },

  {
    name: "RPTRA Dahlia",
    address:
      "Jl. Nurul Hidayah No.6, RT.6/RW.3, Kp. Tengah, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13540",
    location: "2hLymkNXBRLzyjco9",
  },

  {
    name: "RPTRA Danau Sunter",
    address:
      "Jl. Telaga Murni 2 No.1 21, RT.21/RW.1, Sunter Jaya, Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14360",
    location: "KnCorQS5BzhgDPMt5",
  },

  {
    name: "RPTRA Johar Berseri",
    address:
      "Jl. Kramat Jaya Baru 5 No.14, RT.14/RW.1, Johar Baru, Kec. Johar Baru, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10560",
    location: "5XW6EDA7fc7g14ox5",
  },

  {
    name: "RPTRA Maya Asri 13",
    address:
      "RQ2J+WX6, RT.2/RW.13, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
    location: "8nm7c5h3j97fsnoU9",
  },

  {
    name: "RPTRA Bambu Petung",
    address:
      "Jl. Bambu Petung, RT.5/RW.5, Bambu Apus, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13890",
    location: "yNirBG2fCxNPNK676",
  },

  {
    name: "RPTRA Cibesut",
    address:
      "Jl. Swadaya No.2 6, RT.6/RW.14, Cipinang Besar Utara, Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13410",
    location: "xEaENVDD36aH2Xwz9",
  },

  {
    name: "RPTRA Seruni",
    address:
      "Gang Haji Saibun, RT.8/RW.9, Jati Padang, Pasar Minggu, RT.8/RW.9, Jati Padang, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12540",
    location: "Hy24YAhKxA4S4wu1A",
  },

  {
    name: "RPTRA Penjaringan Indah",
    address:
      "Raya Jl. Bandengan Utara No.80 9, RT.9/RW.16, Penjaringan, Kec. Penjaringan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14440",
    location: "xv7nrdpkqNyezhB19",
  },
];
places.forEach((place) => {
  const placeDiv = document.createElement("div");
  placeDiv.innerHTML = `
  <h5>${place.name}</h5>
  <img src="src/imgs/places/${place.name}.webp" alt="${place.name}" />
  <p>
   ${place.address}
  </p>
  <a
    href="https://maps.app.goo.gl/${place.location}"
    target="_blank"
    >Cari Lokasi</a
  >
  `;

  aboutContent2WrapGrid.appendChild(placeDiv);
});
