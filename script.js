let currentLevel = 1; // Level gambar
let currentQuestion = 1; // Pertanyaan (gambar atau warna)

function startGame() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    loadLevel(currentLevel);
}

function loadLevel(level) {
    const levels = [
        { // Level 1 - Apel
            imageSiluet: 'images/siluet_apelKu.png',
            options: [
                { text: 'A. Kolam', answer: 'kolam' },
                { text: 'B. Roti', answer: 'roti' },
                { text: 'C. Apel', answer: 'apel' }
            ],
            colorQuestionImage: 'images/apelKu.png',
            colorOptions: [
                { text: 'A. Merah', answer: 'merah' },
                { text: 'B. Kuning', answer: 'kuning' },
                { text: 'C. Hijau', answer: 'hijau' }
            ],
            background: 'images/level_1.png' // Background untuk level 1
        },
        { // Level 2 - Rumah
            imageSiluet: 'images/siluet_rumahKu.png',
            options: [
                { text: 'A. Mobil', answer: 'mobil' },
                { text: 'B. Rumah', answer: 'rumah' },
                { text: 'C. Sepeda', answer: 'sepeda' }
            ],
            colorQuestionImage: 'images/rumahKu.png',
            colorOptions: [
                { text: 'A. Kuning', answer: 'kuning' },
                { text: 'B. Merah', answer: 'merah' },
                { text: 'C. Ungu', answer: 'ungu' }
            ],
            background: 'images/level_2.png' // Background untuk level 2
        },
        { // Level 3 - Kucing
            imageSiluet: 'images/siluet_kucingKu.png',
            options: [
                { text: 'A. Ular', answer: 'ular' },
                { text: 'B. Kucing', answer: 'kucing' },
                { text: 'C. Tikus', answer: 'tikus' }
            ],
            colorQuestionImage: 'images/kucingKu.png',
            colorOptions: [
                { text: 'A. Putih', answer: 'putih' },
                { text: 'B. Oren', answer: 'oren' },
                { text: 'C. Hijau', answer: 'hijau' }
            ],
            background: 'images/level_3.png' // Background untuk level 3
        },
        { // Level 4 - Mobil
            imageSiluet: 'images/siluet_mobilKu.png',
            options: [
                { text: 'A. Sepeda', answer: 'sepeda' },
                { text: 'B. Kereta', answer: 'kereta' },
                { text: 'C. Mobil', answer: 'mobil' }
            ],
            colorQuestionImage: 'images/mobilKu.png',
            colorOptions: [
                { text: 'A. Oren', answer: 'oren' },
                { text: 'B. Hijau', answer: 'hijau' },
                { text: 'C. Merah', answer: 'merah' }
            ],
            background: 'images/level_4.png' // Background untuk level 4
        },
        { // Level 5 - Mawar
            imageSiluet: 'images/siluet_mawarKu.png',
            options: [
                { text: 'A. Jeruk', answer: 'jeruk' },
                { text: 'B. Semangka', answer: 'semangka' },
                { text: 'C. Mawar', answer: 'mawar' }
            ],
            colorQuestionImage: 'images/mawarKu.png',
            colorOptions: [
                { text: 'A. Putih-Merah', answer: 'putih-merah' },
                { text: 'B. Oren-Ungu', answer: 'oren-ungu' },
                { text: 'C. Merah-Hijau', answer: 'merah-hijau' }
            ],
            background: 'images/level_5Ku.png' // Background untuk level 5
        },
        { // Level 6 - Burung
            imageSiluet: "images/siluet_merpati.png",
            options:[
                {text:'A. Burung',answer:'burung'},
                {text:'B. Harimau',answer:'harimau'},
                {text:'C. Bebek',answer:'bebek'}
            ],
            colorQuestionImage:"images/merpati.png",
            colorOptions:[
                {text:'A. Hijau',answer:'hijau'},
                {text:'B. Ungu',answer:'ungu'},
                {text:'C. Putih',answer:'putih'}
            ],
            background: 'images/level_6.png' // Background untuk level 6
        },
        { // Level 7 - Ikan
            imageSiluet:"images/siluet_ikanKu.png",
            options:[
                {text:'A. Semut',answer:'semut'},
                {text:'B. Jerapah',answer:'jerapah'},
                {text:'C. Ikan',answer:'ikan'}
            ],
            colorQuestionImage:"images/ikanKu.png",
            colorOptions:[
                {text:'A. Hitam',answer:'hitam'},
                {text:'B. Biru-Kuning',answer:'biru-kuning'},
                {text:'C. Merah',answer:'merah'}
            ],
            background: 'images/level_7.png' // Background untuk level 7
        },
        { // Level 8 - Gajah
            imageSiluet:"images/siluet_gajahKu.png",
            options:[
                {text:'A. Musang',answer:'musang'},
                {text:'B. Kambing',answer:'kambing'},
                {text:'C. Gajah',answer:'gajah'}
            ],
            colorQuestionImage:"images/gajahKu.png",
            colorOptions:[
                {text:'A. Merah',answer:'merah'},
                {text:'B. Putih',answer:'putih'},
                {text:'C. Abu-Abu',answer:'abu-abu'}
            ],
            background: 'images/level_8.png' // Background untuk level 8
        },
        { // Level 9 - Kupu-Kupu
            imageSiluet:"images/siluet_kupuKu.png",
            options:[
                {text:'A. Beruang',answer:'beruang'},
                {text:'B. Kupu-Kupu',answer:'kupu-kupu'},
                {text:'C. Kelinci',answer:'kelinci'}
            ],
            colorQuestionImage:"images/kupuKu.png",
            colorOptions:[
              {"text": "A. Kuning", "answer": "kuning"},
              {"text": "B. Biru", "answer": "biru"},
              {"text": "C. Merah", "answer": "merah"}
          ],
          background: 'images/level_9.png' // Background untuk level 9
        },
        { // Level 10 - Sapi
          imageSiluet:"images/siluet_sapiKu.png",
          options:[
              {"text": "A. Sapi", "answer": "sapi"},
              {"text": "B. Kumbang", "answer": "kumbang"},
              {"text": "C. Ulat", "answer": "ulat"}
          ],
          colorQuestionImage:"images/sapiKu.png",
          colorOptions:[
              {"text": "A. Hijau", "answer": "hijau"},
              {"text": "B. Hitam-Putih", "answer": "hitam-putih"},
              {"text": "C. Oren", "answer": "oren"}
          ],
          background: 'images/level_10Ku.png' // Background untuk level 10
      }
    ];

    const levelData = levels[level - 1]; // Ambil data level saat ini

    // Memuat gambar siluet dan opsi jawaban
    const imageElement = document.getElementById('image'); 
    const feedbackElement = document.getElementById('feedback'); 
    currentQuestion = 1; // Reset pertanyaan ke 1

    imageElement.src = levelData.imageSiluet; 
    feedbackElement.textContent = '';
    document.getElementById('options').innerHTML = levelData.options.map(option => 
        `<button onclick="checkAnswer('${option.answer}')">${option.text}</button>`
    ).join('');
    // Set background image untuk level yang sedang dimuat
document.getElementById('game-area').style.backgroundImage = `url(${levelData.background})`;


    // Tampilkan opsi jawaban setelah memuat level
    document.getElementById('options').style.display = "block";
}

function checkAnswer(answer) {
    const correctAnswers = [
        ['apel','merah'], // Jawaban benar untuk level gambar apel dan warna apel
        ['rumah','kuning'], // Jawaban benar untuk level gambar rumah dan warna rumah
        ['kucing','oren'], // Jawaban benar untuk level gambar kucing dan warna kucing
        ['mobil','oren'], // Jawaban benar untuk level gambar mobil dan warna mobil
        ['mawar','merah-hijau'], // Jawaban benar untuk level gambar mawar dan warna mawar
        ['burung','putih'], // Jawaban benar untuk level gambar burung dan warna burung
        ['ikan','biru-kuning'], // Jawaban benar untuk level gambar ikan dan warna ikan
        ['gajah','abu-abu'], // Jawaban benar untuk level gambar gajah dan warna gajah
        ['kupu-kupu','kuning'], // Jawaban benar untuk level gambar kupu-kupu dan warna kupu-kupu
        ['sapi','hitam-putih'] // Jawaban benar untuk level gambar sapi dan warna sapi
    ];

    const feedbackElement = document.getElementById('feedback'); 

    if (currentQuestion === 1) {
        if (answer === correctAnswers[currentLevel - 1][0]) {
            feedbackElement.textContent = "Benar! Selamat! Sekarang tebak warna.";
            document.getElementById('options').style.display = "none"; 

            setTimeout(() => {
                loadColorQuestion();
            }, 1000);
            
        } else {
            feedbackElement.textContent = "Coba lagi.";
        }

    } else if (currentQuestion === 2) {
        if (answer === correctAnswers[currentLevel - 1][1]) {
            feedbackElement.textContent = "Benar! Selamat!";
            document.getElementById('next-level').style.display = "block";
            document.getElementById('options').style.display = "none"; 

        } else {
            feedbackElement.textContent = "Coba lagi.";
        }
    }
}

function loadColorQuestion() {
    const levels = [
        {
            colorQuestionImage : "images/apelKu.png",
            colorOptions : [
                {"text": "A. Merah", "answer": "merah"},
                {"text": "B. Kuning", "answer": "kuning"},
                {"text": "C. Hijau", "answer": "hijau"}
             ],
             background: 'images/level_1.png' // Background untuk level 1
         },
         {
             colorQuestionImage : "images/rumahKu.png",
             colorOptions : [
                 {"text": "A. Kuning", "answer": "kuning"},
                 {"text": "B. Merah", "answer": "merah"},
                 {"text": "C. Ungu", "answer": "ungu"}
             ],
             background: 'images/level_2.png' // Background untuk level 2
         },
         {
             colorQuestionImage : "images/kucingKu.png",
             colorOptions : [
                 {"text":"A.Putih","answer":"putih"},
                 {"text":"B.Oren","answer":"oren"},
                 {"text":"C.Hijau","answer":"hijau"}
             ],
             background: 'images/level_3.png' // Background untuk level 3
         }, 
         {
             colorQuestionImage : "images/mobilKu.png",
             colorOptions : [
                 {"text":"A.Oren","answer":"oren"},
                 {"text":"B.Hijau","answer":"hijau"},
                 {"text":"C.Merah","answer":"merah"}
             ],
             background: 'images/level_4.png' // Background untuk level 4
         }, 
         {
             colorQuestionImage : "images/mawarKu.png",
             colorOptions : [
                 {"text":"A.Putih-Merah","answer":"putih-merah"},
                 {"text":"B.Oren-Ungu","answer":"oren-ungu"},
                 {"text":"C.Merah-Hijau","answer":"merah-hijau"}
             ],
             background: 'images/level_5.png' // Background untuk level 5
         }, 
         {
             colorQuestionImage : "images/merpati.png",
             colorOptions : [
                 {"text":"A.Hijau","answer":"hijau"},
                 {"text":"B.Ungu","answer":"ungu"},
                 {"text":"C.Putih","answer":"putih"}
             ],
             background: 'images/level_6.png' // Background untuk level 6
         }, 
         {
             colorQuestionImage : "images/ikanKu.png",
             colorOptions : [
                 {"text":"A.Putih","answer":"putih"},
                 {"text":"B.Biru-Kuning","answer":"biru-kuning"},
                 {"text":"C.Hijau","answer":"hijau"}
             ],
             background: 'images/level_7.png' // Background untuk level 7
         }, 
         {
             colorQuestionImage : "images/gajahKu.png",
             colorOptions : [
                 {"text":"A.Merah","answer":"merah"},
                 {"text":"B.Putih","answer":"putih"},
                 {"text":"C.Abu-Abu","answer":"abu-abu"}
             ],
             background: 'images/level_8.png' // Background untuk level 8
         }, 
         {
             colorQuestionImage : "images/kupuKu.png",
             colorOptions : [
                 {"text":"A.Kuning","answer":"kuning"},
                 {"text":"B.Biru","answer":"biru"},
                 {"text":"C.Merah","answer":"merah"}
             ],
             background: 'images/level_9.png' // Background untuk level 9
         }, 
         {
             colorQuestionImage : "images/sapiKu.png",
             colorOptions : [
                 {"text":"A.Hijau","answer":"hijau"},
                 {"text":"B.Hitam-Putih","answer":"hitam-putih"},
                 {"text":"C.Oren","answer":"oren"}
             ],
             background: 'images/level_10Ku.png' // Background untuk level 10
         }
     ];

     const levelData = levels[currentLevel - 1]; 

     const imageElement = document.getElementById('image'); 
     imageElement.src = levelData.colorQuestionImage; 

     const feedbackElement = document.getElementById('feedback'); 
     feedbackElement.textContent ="Sekarang warna apa?"; 
    
     document.getElementById('options').innerHTML =
       levelData.colorOptions.map(option => 
           `<button onclick="checkAnswer('${option.answer}')">${option.text}</button>`
       ).join('');

     currentQuestion++; 

     document.getElementById('options').style.display ="block";
}

function nextLevel() {
   currentLevel++;
   
   if (currentLevel > 10) {
       alert("Selamat! Anda telah menyelesaikan semua level!");
       backToHome();
       return;
   }
   
   loadLevel(currentLevel); 
}

function backToHome() {
   currentLevel = 1;
   document.getElementById('home').style.display = 'block';
   document.getElementById('game-area').style.display = 'none';
}

