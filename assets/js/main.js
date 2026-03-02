let menuOpen = document.querySelector(".menu-toggle");
let menuWrapper = document.querySelector(".mens-wrapper");

menuOpen.addEventListener("click", function () {
  menuOpen.classList.toggle("bx-x");
  menuWrapper.classList.toggle("active");
});

const menuData = [
  {
    nama: "Nasi Goreng Spesial",
    kategori: "Nasi",
    rating: 4.8,
    deskripsi: "Nasi goreng dengan telur, ayam, udang dan bumbu rempah khas",
    harga: 35000,
    gambar: "assets/img/nasi-goreng.jpeg",
    pedas: true,
    link: "#",
  },
  {
    nama: "Rendang Daging sapi",
    kategori: "Lauk",
    rating: 5,
    deskripsi: "Daging sapi empuk dengan bumbu rendang kaya rempah dari padang",
    harga: 55000,
    gambar: "assets/img/rendang.jpeg",
    pedas: true,
    link: "#",
  },
  {
    nama: "Sate Ayam Madura",
    kategori: "Lauk",
    rating: 4.9,
    deskripsi: "Sate ayam bakar dengan bumbu kacang khas Madura yang legit",
    harga: 40000,
    gambar: "assets/img/sate-madura.webp",
    pedas: false,
    link: "#",
  },
  {
    nama: "Gado-Gado Jakarta",
    kategori: "Sayur",
    rating: 4.7,
    deskripsi: "Sayuran segar dengan bumbu kacang kental dan lontong",
    harga: 30000,
    gambar: "assets/img/gado-gado.jpeg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Soto Ayam Lamongan",
    kategori: "Berkuah",
    rating: 4.8,
    deskripsi: "Sup ayam dengan kuah kuning gurih, telur dan koya khas",
    harga: 32000,
    gambar: "assets/img/soto-lamongan.jpeg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Bakso Sapi Jumbo",
    kategori: "Berkuah",
    rating: 4.6,
    deskripsi: "Bakso sapi kenyal dengan mie, tahu, dan kuah kaldu segar",
    harga: 35000,
    gambar: "assets/img/bakso-jumbo.jpeg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Nasi Uduk Betawi",
    kategori: "Nasi",
    rating: 4.7,
    deskripsi: "Sayuran segar dengan bumbu kacang kental dan lontong",
    harga: 33000,
    gambar: "assets/img/nasi-uduk.jpeg",
    pedas: true,
    link: "#",
  },
  {
    nama: "Martabak Manis",
    kategori: "Dessert",
    rating: 4.9,
    deskripsi: "Martabak tebal dengan topping coklat, keju, dan kacang",
    harga: 45000,
    gambar: "assets/img/martabak-manis.jpeg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Mie Ayam Pangsit",
    kategori: "Mie",
    rating: 4.7,
    deskripsi: "Mie ayam dengan topping ayam manis dan pangsit renyah",
    harga: 28000,
    gambar: "assets/img/mie-pangsit.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Ayam Geprek Sambal Ijo",
    kategori: "Lauk",
    rating: 4.8,
    deskripsi: "Ayam crispy digeprek dengan sambal ijo pedas segar",
    harga: 35000,
    gambar: "assets/img/ayam geprek sambal ijo.jpeg",
    pedas: true,
    link: "#",
  },
  {
    nama: "Rawon Daging",
    kategori: "Berkuah",
    rating: 4.9,
    deskripsi: "Sup daging sapi dengan kuah hitam khas kluwek",
    harga: 45000,
    gambar: "assets/img/rawon daging.webp",
    pedas: false,
    link: "#",
  },
  {
    nama: "Nasi Uduk Betawi",
    kategori: "Nasi",
    rating: 4.6,
    deskripsi: "Nasi gurih santan dengan lauk ayam dan sambal",
    harga: 30000,
    gambar: "assets/img/nasi uduk.jpeg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Gudeg Jogja",
    kategori: "Nasi",
    rating: 4.8,
    deskripsi: "Nangka muda manis dengan ayam opor dan telur",
    harga: 38000,
    gambar: "assets/img/nasi uduk.jpeg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Tongseng Kambing",
    kategori: "Berkuah",
    rating: 4.7,
    deskripsi: "Daging kambing empuk dengan kuah santan pedas manis",
    harga: 48000,
    gambar: "assets/img/tongseng kambing.jpg",
    pedas: true,
    link: "#",
  },
  {
    nama: "Ikan Bakar Sambal Dabu",
    kategori: "Seafood",
    rating: 4.9,
    deskripsi: "Ikan bakar segar dengan sambal dabu-dabu khas Manado",
    harga: 52000,
    gambar: "assets/img/ikan bakar dabu.jpg",
    pedas: true,
    link: "#",
  },
  {
    nama: "Capcay Kuah",
    kategori: "sayur",
    rating: 4.6,
    deskripsi: "Aneka sayuran segar dengan kuah gurih ringan",
    harga: 27000,
    gambar: "assets/img/capcay.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Ayam Bakar Taliwang",
    kategori: "Lauk",
    rating: 4.9,
    deskripsi: "Ayam bakar khas Lombok dengan sambal pedas mantap",
    harga: 42000,
    gambar: "assets/img/ayam taliwang.jpg",
    pedas: true,
    link: "#",
  },
  {
    nama: "Pempek Palembang",
    kategori: "Snack",
    rating: 4.8,
    deskripsi: "Pempek kenyal dengan kuah cuko asam pedas manis",
    harga: 25000,
    gambar: "assets/img/pempek palembang.jpeg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Nasi Liwet Solo",
    kategori: "Nasi",
    rating: 4.7,
    deskripsi: "Nasi gurih dengan ayam suwir dan labu siam",
    harga: 33000,
    gambar: "assets/img/nasi liwet.webp",
    pedas: false,
    link: "#",
  },
  {
    nama: "Seblak Bandung",
    kategori: "kuah",
    rating: 4.8,
    deskripsi: "Kerupuk rebus pedas dengan topping sosis dan bakso",
    harga: 26000,
    gambar: "assets/img/seblak bandung.jpeg",
    pedas: true,
    link: "#",
  },
  {
    nama: "Sate Kambing",
    kategori: "Berkuah",
    rating: 4.8,
    deskripsi: "Sate kambing empuk dengan bumbu kecap manis",
    harga: 50000,
    gambar: "assets/img/sate kambing.avif",
    pedas: false,
    link: "#",
  },
  {
    nama: "Nasi Padang Komplit",
    kategori: "Nasi",
    rating: 5,
    deskripsi: "Nasi putih dengan aneka lauk khas Minang",
    harga: 55000,
    gambar: "assets/img/nasi padang komplit.jpeg",
    pedas: true,
    link: "#",
  },
  {
    nama: "Mie Goreng Jawa",
    kategori: "Mie",
    rating: 4.6,
    deskripsi: "Mie goreng dengan ayam dan sayur khas Jawa",
    harga: 29000,
    gambar: "assets/img/mie goreng jawa.webp",
    pedas: true,
    link: "#",
  },
  {
    nama: "Sop Buntut",
    kategori: "Berkuah",
    rating: 4.9,
    deskripsi: "Sup buntut sapi dengan kuah kaldu bening gurih",
    harga: 60000,
    gambar: "assets/img/sop buntut.jpeg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Ayam Rica-Rica",
    kategori: "Lauk",
    rating: 4.8,
    deskripsi: "Ayam pedas khas Manado dengan bumbu rica",
    harga: 40000,
    gambar: "assets/img/ayam ricarica.avif",
    pedas: true,
    link: "#",
  },
  {
    nama: "Perkedel Kentang",
    kategori: "Snack",
    rating: 4.5,
    deskripsi: "Perkedel kentang lembut dengan rasa gurih",
    harga: 15000,
    gambar: "assets/img/perkedel kentang.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Tempe Mendoan",
    kategori: "Snack",
    rating: 4.6,
    deskripsi: "Tempe goreng tipis khas Banyumas",
    harga: 18000,
    gambar: "assets/img/tempe mendoan.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Lontong Sayur",
    kategori: "Berkuah",
    rating: 4.7,
    deskripsi: "Lontong dengan kuah santan dan sayur labu",
    harga: 25000,
    gambar: "assets/img/lontong sayur.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Nasi Kebuli",
    kategori: "Nasi",
    rating: 4.8,
    deskripsi: "Nasi berbumbu rempah dengan daging kambing",
    harga: 47000,
    gambar: "assets/img/nasi kebuli.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Mie Aceh",
    kategori: "Mie",
    rating: 4.9,
    deskripsi: "Mie tebal dengan bumbu kari khas Aceh",
    harga: 38000,
    gambar: "assets/img/mie aceh.jpg",
    pedas: true,
    link: "#",
  },
  {
    nama: "Iga Bakar Madu",
    kategori: "Lauk",
    rating: 4.9,
    deskripsi: "Iga sapi bakar dengan saus madu manis gurih",
    harga: 65000,
    gambar: "assets/img/iga bakar.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Es Cendol",
    kategori: "Minuman",
    rating: 4.7,
    deskripsi: "Minuman segar santan gula merah dengan cendol",
    harga: 18000,
    gambar: "assets/img/es cendol.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Jus Alpukat",
    kategori: "Minuman",
    rating: 4.8,
    deskripsi: "Jus alpukat lembut dengan topping coklat",
    harga: 22000,
    gambar: "assets/img/jus alpukat.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Kopi Tubruk",
    kategori: "Minuman",
    rating: 4.7,
    deskripsi: "Kopi hitam tradisional dengan aroma kuat",
    harga: 15000,
    gambar: "assets/img/kopi tubruk.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Es Teh Tarik",
    kategori: "Minuman",
    rating: 4.8,
    deskripsi: "Es teh susu dengan busa lembut khas Malaysia",
    harga: 18000,
    gambar: "assets/img/teh tarik.jpeg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Matcha Latte",
    kategori: "Minuman",
    rating: 4.9,
    deskripsi: "Minuman matcha creamy dengan rasa lembut dan sedikit pahit",
    harga: 28000,
    gambar: "assets/img/matcha latte.webp",
    pedas: false,
    link: "#",
  },
  {
    nama: "Es Thai Tea",
    kategori: "Minuman",
    rating: 4.7,
    deskripsi: "Teh segar dengan perasan lemon alami",
    harga: 17000,
    gambar: "assets/img/thai tea.png",
    pedas: false,
    link: "#",
  },
  {
    nama: "Cappuccino",
    kategori: "Minuman",
    rating: 4.8,
    deskripsi: "Kopi espresso dengan foam susu lembut",
    harga: 27000,
    gambar: "assets/img/capucino.png",
    pedas: false,
    link: "#",
  },
  {
    nama: "Kentang Goreng",
    kategori: "Snack",
    rating: 4.7,
    deskripsi: "Kentang goreng crispy dengan saus sambal dan mayo",
    harga: 22000,
    gambar: "assets/img/kentang goreng.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Onion Ring",
    kategori: "Snack",
    rating: 4.6,
    deskripsi: "Bawang bombay goreng tepung renyah",
    harga: 24000,
    gambar: "assets/img/onion ring.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Cireng Isi Ayam",
    kategori: "Snack",
    rating: 4.7,
    deskripsi: "Cireng kenyal dengan isian ayam pedas gurih",
    harga: 20000,
    gambar: "assets/img/cireng ayam.jpeg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Pisang Goreng Coklat",
    kategori: "Snack",
    rating: 4.8,
    deskripsi: "Pisang goreng crispy dengan coklat leleh",
    harga: 21000,
    gambar: "assets/img/piscok.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Tahu Crispy",
    kategori: "Snack",
    rating: 4.6,
    deskripsi: "Tahu goreng tepung renyah dengan sambal pedas",
    harga: 18000,
    gambar: "assets/img/tahu crispy.JPG",
    pedas: false,
    link: "#",
  },
  {
    nama: "Chocolate Latte",
    kategori: "Minuman",
    rating: 4.9,
    harga: "30000",
    deskripsi: "Perpaduan coklat dan espresso dengan susu creamy",
    gambar: "assets/img/coklat.avif",
    pedas: false,
    link: "#",
  },
  {
    nama: "Tahu Crispy",
    kategori: "Snack",
    rating: 4.6,
    deskripsi: "Tahu goreng tepung renyah dengan sambal pedas",
    harga: 18000,
    gambar: "assets/img/tahu crispy.JPG",
    pedas: false,
    link: "#",
  },
  {
    nama: "Soda Gembira",
    kategori: "Minuman",
    rating: 4.8,
    deskripsi: "Soda merah dengan susu manis dan es batu",
    harga: 20000,
    gambar: "assets/img/soda gembira.webp",
    pedas: false,
    link: "#",
  },
  {
    nama: "Es Kelapa Muda",
    kategori: "Minuman",
    rating: 4.9,
    deskripsi: "Kelapa muda segar dengan air kelapa alami",
    harga: 22000,
    gambar: "assets/img/es kelapa muda.jpeg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Takoyaki",
    kategori: "Snack",
    rating: 4.8,
    deskripsi: "Bola-bola tepung isi gurita dengan saus khas Jepang",
    harga: 26000,
    gambar: "assets/img/takoyaki.jpeg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Pangsit Goreng",
    kategori: "Snack",
    rating: 4.7,
    deskripsi: "Pangsit ayam goreng renyah dengan saus sambal",
    harga: 19000,
    gambar: "assets/img/pangsit goreng.webp",
    pedas: false,
    link: "#",
  },
  {
    nama: "Red Velvet Latte",
    kategori: "Minuman",
    rating: 4.8,
    deskripsi: "Minuman red velvet creamy dengan foam lembut",
    harga: 29000,
    gambar: "assets/img/red velvet.avif",
    pedas: false,
    link: "#",
  },
  {
    nama: "Milo Dino",
    kategori: "Minuman",
    rating: 4.8,
    deskripsi: "Minuman milo dengan topping bubuk milo melimpah",
    harga: 23000,
    gambar: "assets/img/mlo.jpg",
    pedas: false,
    link: "#",
  },
  {
    nama: "Dimsum Ayam",
    kategori: "Snack",
    rating: 4.8,
    deskripsi: "Dimsum ayam kukus lembut dengan saus spesial",
    harga: 26000,
    gambar: "assets/img/dimsum ayam.avif",
    pedas: false,
    link: "#",
  },
];

const listEl = document.getElementById("menuList");

let currentPage = 1;
const itemsPerPage = 8; // 8 menu per halaman
const totalPages = Math.ceil(menuData.length / itemsPerPage);

// bagian si menu deskripsi nya dll
function renderMenu() {
  listEl.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const paginatedItems = menuData.slice(start, end);

  paginatedItems.forEach((d) => {
    listEl.innerHTML += `
      <div class="menu-card">
        <div class="menu-image">
          <img src="${d.gambar}" alt="${d.nama}">
          <span class="badge-kategori">${d.kategori}</span>

          ${
            d.pedas
              ? `<span class="badge-pedas"><i class='bx bxs-flame'></i>Pedas</span>`
              : ""
          }

        </div>

        <div class="menu-body">
          <div class="menu-title">
            <h3>${d.nama}</h3>
            <span class="rating">
              <i class="bx bxs-star"></i> ${d.rating}
            </span>
          </div>
        

          <p class="menu-desc">${d.deskripsi}</p>

          <div class="menu-footer">
            <div class="price-value">
             <span class="currency">Rp</span>
             <strong>${d.harga.toLocaleString("id-ID")}</strong>
            </div>
            <a href="${d.link}" class="btn-pesan">Pesan</a>
          </div>
        </div>
      </div>
    `;
  });
}
renderMenu();

// cara membuat pagination

const paginationEl = document.querySelector("#pagination");

function renderPagination() {
  paginationEl.innerHTML = "";

  // Tombol Prev
  if (currentPage > 1) {
    paginationEl.innerHTML += `
      <button onclick="changePage(${currentPage - 1})">
        <i class='bx bx-chevron-left'></i>
      </button>
    `;
  }

  // Logic tampilkan max 4 angka
  let start = Math.max(1, currentPage - 1);
  let end = Math.min(totalPages, start + 3);

  for (let i = start; i <= end; i++) {
    paginationEl.innerHTML += `
      <button 
        class="${i === currentPage ? "active" : ""}"
        onclick="changePage(${i})">
        ${i}
      </button>
    `;
  }

  // Tombol Next
  if (currentPage < totalPages) {
    paginationEl.innerHTML += `
      <button onclick="changePage(${currentPage + 1})">
        <i class='bx bx-chevron-right'></i>
      </button>
    `;
  }
}

function changePage(page) {
  currentPage = page;
  renderMenu(); // supaya data ikut berubah
  renderPagination();
}

renderMenu();
renderPagination();

// seolah olah si kontak seperti email dll terkirim
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesan berhasil dikirim!");
});
