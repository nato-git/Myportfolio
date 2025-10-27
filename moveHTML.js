const caption = {
  title: ['ドラクエ１竜王戦'],
  explanation: [
    `GoogleColabで制作したFC版ドラゴンクエスト１竜王戦の再現です。<br>
    Ipython.displayを利用し、Python内でHTML,Javascriptを呼び出しています。<br>`,
  ],
  picture1: ['project_img/ryuou_battle_1.png'],
  picture2: ['project_img/ryuou_battle_2.png'],
  picture3: ['project_img/ryuou_battle_3.png'],
  url: [
    //ryuou_battle
    'https://colab.research.google.com/drive/1vlJxniejNXWUlFSLyqM3Qte1vUIexAkA?usp=sharing',
  ],
};

function movingHTML(i) {
  const htmltext = `
    <div class="mains">
    <h2>${caption.title[i]}</h2>
    <p>${caption.explanation[i]}</p>
    <div class="pic">
    <img src="${caption.picture1[i]}">
    <img src="${caption.picture2[i]}"><br>
    <img src="${caption.picture3[i]}"><br>
    </div>
    <a href="${caption.url[i]}" style="display:flex; justify-content: center;">サイトへ移動</a><br>
    <a href="homepage.html" style="padding-top:20px;">ポートフォリオへ移動</a>
    </div>`;
  document.body.innerHTML = htmltext;
}
