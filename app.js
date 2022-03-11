const main = document.getElementById("main");
const root = document.getElementById("root");

let currentTarget = null;

const targetSize = 32;
const totalTargets = 20;

const randomsX = JSON.parse("[0.5,0.9625277265034133,0.4497198696049016,0.5894461961821691,0.04703377644034612,0.741750020090967,0.827006147417304,0.35824515944156565,0.6871175951781434,0.681468886395582,0.9508697926039387,0.013845487766526388,0.29313966442004147,0.19966774974656265,0.06189232683083934,0.9488955504194783,0.5562236846129678,0.6177970034363145,0.8152618114684929,0.20765119592313241,0.24120281270616317,0.38011830013554837,0.6763342552950098,0.7671288289306746,0.9213675868672366,0.19900597506450013,0.06326136417413997,0.7876571320814427,0.7259612531833317,0.4875485956230896,0.22759103743807207,0.8466972849812433,0.970985782363126,0.17644203336566733,0.13895022411383495,0.8372533139469103,0.29920252848562234,0.2674137198987838,0.2479330560113251,0.9940138484712358,0.28855675869545494,0.5686818539326421,0.44886716205542165,0.3009627677788833,0.020380643583206348,0.5603211854129222,0.29697379761025955,0.22163712782293277,0.7291699415392805,0.07231647548315157,0.9159807275652139,0.28779264601024934,0.06603153944582707,0.27380110293653526,0.8741135044063606,0.5551657787530633,0.19662945137833665,0.32400225788392656,0.5255356906822084,0.6058941257138355,0.3988004305968451,0.16054830890407845,0.4982393013829287,0.6323981245256038,0.4691625416511289,0.9537508414603195,0.44771090028832017,0.8953298793643973,0.17663368332237983,0.7991168520257168,0.5891050656406907,0.2432448137990173,0.6241331357991271,0.11527594737813174,0.94879489421499,0.30912919355228974,0.5788740115065636,0.12523126374670768,0.4208574143761157,0.5383516263157448,0.12495338803392153,0.5529797206359557,0.33643302521674423,0.20094691624627803,0.8423467515767953,0.47356815539929054,0.7821863175536361,0.1626246686337427,0.9620759598155151,0.10743186083630962,0.5173671737873176,0.05061061076064011,0.9795605476297404,0.8532438484815026,0.30286460236460755,0.6713643354459797,0.25349255218055267,0.4904369817656513,0.8797746730585021,0.88234394664444,0.30861607931880664]");
const randomsY = JSON.parse("[0.5,0.6818914279235173,0.8722594847167762,0.3754146181874982,0.9997713866870501,0.4567462108229188,0.2888250066544007,0.7278608713681347,0.5754236434221958,0.0017119838953987276,0.978427459145151,0.627390665276572,0.9851692499700309,0.5235484664732022,0.9484264296468639,0.9544027450480284,0.6913064375527826,0.46874287134666615,0.6858358870166388,0.7750041624744353,0.010694672951181428,0.49492093660421643,0.3349333003603754,0.9489773334883793,0.3389464549463781,0.14638775647635316,0.9158669234218593,0.23750888731396747,0.9226575170323765,0.6559669333859348,0.0861181457690483,0.5418331899334761,0.05700606953541554,0.7445276057032486,0.64199090951197,0.455916098534088,0.6380186619830288,0.6348213503953775,0.4816008185091947,0.5282471622100384,0.606275606561401,0.07660711536911635,0.9205944999197744,0.7295146300195261,0.8413198618472522,0.26949407596182495,0.527868995790475,0.6587232851844318,0.6209512583277816,0.2873125671648342,0.5307772534917388,0.4020559380315951,0.8237904552074229,0.9890100104409325,0.27514867937884424,0.8235823407484386,0.6018539735618906,0.3113514219618203,0.07709655450039565,0.6866362038116334,0.5654093235590247,0.45055643291286684,0.6426503990911501,0.7336453702361256,0.014220370429824714,0.03539296356610455,0.26364358940370103,0.820045782076747,0.33453449942479585,0.42502664426184356,0.15879548424761092,0.8357216797769589,0.3253061389845353,0.15702696820551698,0.4860057863979088,0.03927807432411501,0.752630914926278,0.7417163212143147,0.09053485578625842,0.3543023990924803,0.2914642128226168,0.30429057674175874,0.29940370277678263,0.30299237967241766,0.9546643445822938,0.3067127426346328,0.9376272311934879,0.1815417487909281,0.28844900040433896,0.03621988693300482,0.6953502830877365,0.17319662452983375,0.07610184568286327,0.014432935328015928,0.855105732630737,0.49257453123735373,0.752104686792936,0.8119410803987115,0.08070124498477682,0.9627069444396965,0.9835482952521704]");

const viewport = root.getBoundingClientRect();
const height = viewport.height - targetSize;
const width = viewport.width - targetSize;

function drawTarget(index) {
  const rx = randomsX[index];
  const ry = randomsY[index];
  const x = rx * width;
  const y = ry * height;
  currentTarget = document.createElement("div");
  currentTarget.style.position = "absolute";
  currentTarget.style.left = x + "px";
  currentTarget.style.top = y + "px";
  currentTarget.style.width = targetSize + "px";
  currentTarget.style.height = targetSize + "px";
  currentTarget.style.backgroundColor = "blue";
  currentTarget.addEventListener('click', targetClicked)
  root.appendChild(currentTarget);
}

function end(time) {
  root.remove();
  const res = document.createElement("div");
  res.setAttribute("id", "end-panel");
  res.innerHTML = "Fini en " + time + "ms.";
  const reload = document.createElement("a");
  reload.href = "#";
  reload.innerHTML = "Essaye encore";
  reload.addEventListener("click", () => {
    window.location.reload();
  })
  main.appendChild(res);
  main.appendChild(reload);
}


let currentTargetIndex = 0;
let startTime = null;

function targetClicked(e) {
  if (e) {
    const h = document.getElementById("help");
    if (h) {
      h.remove();
    }
  }

  if (startTime == null) {
    startTime = new Date().getTime();
  }
  if (currentTarget) {
    currentTarget.remove();
  }
  if (currentTargetIndex < totalTargets) {
    drawTarget(currentTargetIndex);
    currentTargetIndex++;
  } else {
    const endTime = new Date().getTime();
    const elapsed = endTime - startTime;
    end(elapsed);
  }
}

targetClicked();

