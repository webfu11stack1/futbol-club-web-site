$(document).ready(function(){
    $('.player-slider').slick({
      infinite: true,        // Avtomatik aylanish
      slidesToShow: 4,       // Har safar 4 ta o'yinchi ko'rsatiladi
      slidesToScroll: 1,     // Har safar 1 ta slayd o'tadi
      autoplay: true,        // Avtomatik o'tish
      autoplaySpeed: 1000,   // Har 3 sekundda o'tadi
      arrows: false,         // Yoqilgan tugmalarni olib tashlash
      dots: true,            // Sahifa tugmalari (dots)
    });
  });
  
  // Modalni ochish va yopish funksiyalari
  const playerCards = document.querySelectorAll('.player-card');
  const modal = document.getElementById('player-modal');
  const closeModal = document.getElementById('close-modal');
  
  // Modalni ochish
  playerCards.forEach(card => {
    card.addEventListener('click', function() {
      const playerId = this.getAttribute('data-player');
      
      // Ma'lumotlarni yangilash (masalan, player 1 uchun)
      const playerData = getPlayerData(playerId);
      
      // Modaldagi ma'lumotlarni yangilash
      document.getElementById('modal-player-img').src = playerData.img;
      document.getElementById('modal-player-name').textContent = playerData.name;
      document.getElementById('modal-player-position').textContent = playerData.position;
      document.getElementById('modal-player-age').textContent = playerData.age;
      document.getElementById('modal-player-club').textContent = playerData.club;
      document.getElementById('modal-player-price').textContent = playerData.price;
      document.getElementById('modal-player-achievements').textContent = playerData.achievements;
      
      // Modalni ko'rsatish
      modal.style.display = 'block';
    });
  });
  
  // Modalni yopish
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Modalni yopish uchun klaviatura tugmasi (Esc) ishlatish
  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
  
  // Foydalanuvchining ID asosida o'yinchi ma'lumotlarini olish
  function getPlayerData(playerId) {
    const players = {
      1: {
        img: 'pic/mbappe.png',
        name: 'Mbappe',
        position: 'Hujumchi',
        age: 25,
        club: 'Real Madrid',
        price: '$50,000,000',
        achievements: '5 ta chempionlik, 3 ta kubok'
      },
      2: {
        img: 'pic/vini.png',
        name: 'Vini Jr',
        position: 'Hujumchi',
        age: 28,
        club: 'Real Madrid',
        price: '$40,000,000',
        achievements: '2 ta kubok'
      },
      3: {
        img: 'pic/couttois.png',
        name: 'Courtois',
        position: 'Darvozabon',
        age: 25,
        club: 'Real Madrid',
        price: '$50,000,000',
        achievements: '5 ta chempionlik, 3 ta kubok'
      },
      4: {
        img: 'pic/belinham.png',
        name: 'Bellingham',
        position: 'Yarim Himoyachi',
        age: 28,
        club: 'Real Madrid',
        price: '$40,000,000',
        achievements: '2 ta kubok'
      },
      5: {
        img: 'pic/rodrigo.png',
        name: 'Rodrigo',
        position: 'Hujumchi',
        age: 25,
        club: 'Real Madrid',
        price: '$50,000,000',
        achievements: '5 ta chempionlik, 3 ta kubok'
      },
      6: {
        img: 'pic/carvahal.png',
        name: 'Carvahal',
        position: 'Himoyachi',
        age: 28,
        club: 'Real Madrid',
        price: '$40,000,000',
        achievements: '2 ta kubok'
      },
      7: {
        img: 'pic/valverde.png',
        name: 'Valverde',
        position: 'Yarim Himoyachi',
        age: 25,
        club: 'Real Madrid',
        price: '$50,000,000',
        achievements: '5 ta chempionlik, 3 ta kubok'
      },
      8: {
        img: 'pic/rudiger.png',
        name: 'Rudiger',
        position: 'Himoyachi',
        age: 28,
        club: 'Real Madrid',
        price: '$40,000,000',
        achievements: '2 ta kubok'
      },
      9: {
        img: 'pic/alaba.png',
        name: 'Alaba',
        position: 'Himoyachi',
        age: 25,
        club: 'Real Madrid',
        price: '$50,000,000',
        achievements: '5 ta chempionlik, 3 ta kubok'
      },
      10: {
        img: 'pic/modrich.png',
        name: 'Modrich',
        position: 'Yarim Himoyachi',
        age: 28,
        club: 'Real Madrid',
        price: '$40,000,000',
        achievements: '2 ta kubok'
      },
      11: {
        img: 'pic/camavinga.png',
        name: 'Camavinga',
        position: 'Yarim Himoyachi',
        age: 24,
        club: 'Real Madrid',
        price: '$40,000,000',
        achievements: '2 ta kubok'
      }
      // Qo'shimcha o'yinchilar ma'lumotlarini shu tarzda qo'shish mumkin...
    };
  
    return players[playerId];
  }
  const modals = document.querySelectorAll('.modal');
  const closeBtns = document.querySelectorAll('.close-btn');
  const readMoreBtns = document.querySelectorAll('.read-more');
  
  readMoreBtns.forEach(button => {
    button.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      modal.style.display = "block"; // Modalni ko'rsatish
    });
  });
  
  closeBtns.forEach(button => {
    button.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      modal.style.display = "none"; // Modalni yashirish
    });
  });
  
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      modals.forEach(modal => {
        modal.style.display = "none"; // Modalni bosish orqali yopish
      });
    }
  });
  