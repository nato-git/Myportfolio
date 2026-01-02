const caption = {
  title: ['ドラクエ１竜王戦', 'Juppyter', '小学生向け漢字辞典', 'CRL'],
  explanation: [
    //ryuou_battle
    `GoogleColabで制作したFC版ドラゴンクエスト１竜王戦の再現です。<br>
    Ipython.displayを利用し、Python内でHTML,Javascriptを呼び出しています。<br>`,
    //Juppyter
    `2年文化祭でグループ制作した2Dのシューティングゲームです。<br>
    Unity,VScode,Githubで制作しました。<br>
    敵を倒すとアルファベットをドロップし、特定のアルファベットを集めることで技を発動することができます。`,
    //kanji_jiten
    `個人で制作した小学生向けの漢字辞典です。<br>
    文部科学省が出しているcsvファイルを利用して1年生から6年生までの漢字を表示させています。<br>
    また、tesseractを利用して、画像から小学生で習う漢字のみを抽出して調べることもできます。`,
    //CRL
    `個人で制作したAndroidアプリです。<br>
    AndroidStudio,Kotlinで制作しました。<ruby>CRL<rt>シール</rt></ruby>(ChaRacterListapp)は、作品のキャラなどを作品ごとにまとめることができます。<br>`,
    //FillSupporter
    `個人で制作したマインクラフト統合版用アドオンです。<br>
    Fillコマンドを手軽に実行することができるアドオンです。Javascriptで制作しました。`,
    //Gohome
    `個人で制作したPythonを使用した謎解き脱出ゲームです。<br>
    目が覚めると知らない家にいた主人公がどうにか脱出するゲームとなっています。`,
  ],
  picture1: [
    'project_img/ryuou_battle_1.png',
    'project_img/2dshoot_1.png',
    'project_img/kanji_1.png',
    'project_img/crl_1.png',
    'project_img/fill_1.png',
    'project_img/gohome_1.png',
  ],
  picture2: [
    'project_img/ryuou_battle_2.png',
    'project_img/2dshoot_2.png',
    'project_img/kanji_2.png',
    'project_img/crl_2.png',
    'project_img/fill_2.png',
    'project_img/gohome_2.png',
  ],
  picture3: [
    'project_img/ryuou_battle_3.png',
    'project_img/2dshoot_3.png',
    'project_img/kanji_3.png',
    'project_img/crl_3.png',
    'project_img/fill_3.png',
    'project_img/gohome_3.png',
  ],
  url: [
    //ryuou_battle
    'https://colab.research.google.com/drive/1vlJxniejNXWUlFSLyqM3Qte1vUIexAkA?usp=sharing',
    //2dshooting
    'https://github.com/panko200/2D_Shooting_Game_Team.git',
    //kanji_jiten
    'https://nato-git.github.io/kanji-dictionary/home',
    //CRL
    'https://github.com/nato-git/CharacterListApp.git',
    //FillSupporter
    'https://github.com/nato-git/FillSupporterBehavior.git',
    //Gohome
    'https://github.com/nato-git/EscapeGameByPython.git',
  ],
};

function movingHTML(i) {
  const htmltext = `
    <div class="mains">
    <h2 style="border-bottom:5px #102b40 solid;">${caption.title[i]}</h2>
    <p>${caption.explanation[i]}</p>
    <div class="pic">
    <img src="${caption.picture1[i]}"><br>
    <img src="${caption.picture2[i]}"><br>
    <img src="${caption.picture3[i]}"><br>
    </div>
    <a href="${caption.url[i]}" style="display:flex; justify-content: center; padding-top: 5px;">サイトへ移動</a><br>
    <a href="homepage.html" style="padding-top:20px;">ポートフォリオへ移動</a>
    </div>`;
  document.body.innerHTML = htmltext;
}
