// HTML elements
let treeSelectedIndex = 0;
let baseSelectedIndex = 1;
let treeImgSelectedIndex = 0;

const baseSrc = [
  "https://biji-ai.vercel.app/images/isometric-base-default.svg",
  "https://biji-ai.vercel.app/images/isometric-base-grass.svg",
  "https://biji-ai.vercel.app/images/isometric-base-stone.svg",
  "https://biji-ai.vercel.app/images/isometric-base-water.svg",
];

const treeSrc = [
  "https://biji-ai.vercel.app/images//isometric-tree-0.svg",
  "https://biji-ai.vercel.app/images//isometric-tree-1.svg",
  "https://biji-ai.vercel.app/images//isometric-tree-2.svg",
  "https://biji-ai.vercel.app/images//isometric-tree-3.svg",
  "https://biji-ai.vercel.app/images//isometric-tree-4.svg",
  "https://biji-ai.vercel.app/images//isometric-tree-5.svg",
  "https://biji-ai.vercel.app/images//isometric-tree-6.svg",
  "https://biji-ai.vercel.app/images//isometric-tree-7.svg",
  "https://biji-ai.vercel.app/images//isometric-tree-8.svg",
];
window.addEventListener("load", function () {
  console.log("All assets are loaded");
  const baseBtn = document.getElementById("base-btn");
  const treeBtn = document.getElementById("tree-btn");
  const baseElm = document.getElementById("base");
  const treeElm = document.getElementById("tree");

  baseBtn.addEventListener("click", () => {
    baseElm.style.display = "";
    treeElm.style.display = "none";
    baseBtn.classList.add("bg-white");
    treeBtn.classList.remove("bg-white");
  });

  treeBtn.addEventListener("click", () => {
    baseElm.style.display = "none";
    treeElm.style.display = "";
    treeBtn.classList.add("bg-white");
    baseBtn.classList.remove("bg-white");
  });
});

function onTreeSelectionClick(i) {
  const treeSelections = document.getElementsByClassName("tree-selection");
  treeSelections.forEach((treeElm, index) => {
    const textElm = treeElm.querySelector("p");
    if (index === i - 1) {
      treeElm.classList.remove("bg-white");
      treeElm.classList.add("bg-blue-300");
      treeElm.classList.add("bg-opacity-75");
      textElm.classList.remove("text-gray-900");
      textElm.classList.add("text-white");
    } else {
      treeElm.classList.remove("bg-blue-300");
      treeElm.classList.remove("bg-opacity-75");
      treeElm.classList.add("bg-white");
      textElm.classList.add("text-gray-900");
      textElm.classList.remove("text-white");
    }
  });
  treeSelectedIndex = i - 1;
}

function onBaseSelectionClick(i) {
  baseSelectedIndex = i;
  const baseSelections = document.getElementsByClassName("base-selection");
  baseSelections.forEach((baseElm, index) => {
    const textElm = baseElm.querySelector("p");
    const subTextElm = baseElm.querySelector("span");
    if (index === i) {
      baseElm.classList.remove("bg-white");
      baseElm.classList.add("bg-blue-300");
      baseElm.classList.add("bg-opacity-75");
      textElm.classList.remove("text-gray-900");
      textElm.classList.add("text-white");
      subTextElm.classList.add("text-sky-100");
      subTextElm.classList.remove("text-gray-500");
    } else {
      baseElm.classList.remove("bg-blue-300");
      baseElm.classList.remove("bg-opacity-75");
      baseElm.classList.add("bg-white");
      textElm.classList.add("text-gray-900");
      textElm.classList.remove("text-white");
      subTextElm.classList.remove("text-sky-100");
      subTextElm.classList.add("text-gray-500");
    }
  });

  const currentBase = document.getElementById(`base-${treeSelectedIndex + 1}`);
  currentBase.src = baseSrc[i];
}

function onTreeImgClick(i) {
  treeImgSelectedIndex = i;
  const treeImgSelections =
    document.getElementsByClassName("tree-img-selection");
  treeImgSelections.forEach((treeImgElm, index) => {
    const textElm = treeImgElm.querySelector("p");
    const subTextElm = treeImgElm.querySelector("span");
    if (index === i) {
      treeImgElm.classList.remove("bg-white");
      treeImgElm.classList.add("bg-blue-300");
      treeImgElm.classList.add("bg-opacity-75");
      textElm.classList.remove("text-gray-900");
      textElm.classList.add("text-white");
      subTextElm.classList.add("text-sky-100");
      subTextElm.classList.remove("text-gray-500");
    } else {
      treeImgElm.classList.remove("bg-blue-300");
      treeImgElm.classList.remove("bg-opacity-75");
      treeImgElm.classList.add("bg-white");
      textElm.classList.add("text-gray-900");
      textElm.classList.remove("text-white");
      subTextElm.classList.remove("text-sky-100");
      subTextElm.classList.add("text-gray-500");
    }
  });

  const currentBase = document.getElementById(`tree-${treeSelectedIndex + 1}`);
  currentBase.src = treeSrc[i];
}
