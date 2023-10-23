


// -------------------------- nav toggle ---------------------
const item = document.getElementById('menu')
const toggleMenu = () => {
        item.style.transform = 'translate(0%)';
}

const hideMenu = () => {
        item.style.transform = 'translate(110%)';
}


// ---------------------------- droup down list -------------------------------
let innertoggle = false
const droup_menu = document.getElementById('droup_menu')
const droupmenu = () => {
        if (window.innerWidth < 768) {
                if (innertoggle === false) {
                        droup_menu.style.display = "block";
                        innertoggle = true
                }
                else if (innertoggle === true) {
                        droup_menu.style.display = "none";
                        innertoggle = false
                }
        }
}


// ---------------------- products ---------------
const arr = [
        //--------------------- tablets -------------------
        //--------------------- tablets -------------------
        {
                type: "Tablet",
                title: "control acidity relive symptoms ",
                name: "kELYRAB-20 Tablet",
                dis: ["SAFE & eFFECTIVE WAY TO TREAT GERD IN KIDS", "SAFE & eFFECTIVE WAY TO TREAT GERD IN KIDS"]
        },
        {
                type: "Tablet",
                title: "control acidity relive symptoms ",
                name: "kelycef - 200 Tablet",
                dis: ["SAFE & eFFECTIVE WAY TO TREAT GERD IN KIDS", "SAFE & eFFECTIVE WAY TO TREAT GERD IN KIDS"]
        },
        {
                type: "Tablet",
                title: "control acidity relive symptoms ",
                name: "kelycef-cv Tablet",
                dis: ["SAFE & eFFECTIVE WAY TO TREAT GERD IN KIDS", "SAFE & eFFECTIVE WAY TO TREAT GERD IN KIDS"]
        },
        {
                type: "Tablet",
                title: "ridabone-ct Tablet",
                name: "ridabone-ct Tablet",
                dis: ['calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg', 'calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg']
        },
        {
                type: "Tablet",
                title: "Kelymox Tablet",
                name: "kelymox Table",
                dis: ['calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg', 'calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg']
        },

        {
                type: "Tablet",
                title: "mtln Tablet",
                name: "mtln Tablet",
                dis: ['calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg', 'calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg']
        },
        {
                type: "Tablet",
                title: "Kelymox Tablet",
                name: "kwikril-sp tablet",
                dis: ['calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg', 'calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg']
        },
        {
                type: "Tablet",
                title: "Kelymox Tablet",
                name: "kelyrab-JR tablet",
                dis: ['calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg', 'calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg']
        },
        //--------------------- syrup -------------------
        //--------------------- syrup -------------------
        {
                type: "syrup",
                title: " the controller & maintainer",
                name: "kelyfer-xt syrup",
                dis: ['calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg', 'calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg']
        },
        {
                type: "syrup",
                title: " the controller & maintainer",
                name: "kelyfull-jr syrup",
                dis: ['calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg', 'calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg']
        },
        {
                type: "syrup",
                title: " the controller & maintainer",
                name: "kelyzinc syrup",
                dis: ['calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg', 'calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg']
        },
        {
                type: "syrup",
                title: " the controller & maintainer",
                name: "kelycef syrup",
                dis: ['calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg', 'calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg']
        },
        {
                type: "syrup",
                title: "Amoxiciline+Clavulanic Acid",
                name: "Kelymox",
                dis: ['Excellent Clinical Result in Varied Infections', 'Time-Tested and Proven Combination', 'Stable in Presence of Gastric Acid']
        },
        {
                type: "syrup",
                title: "Cefpodoxime 50mg/100mg",
                name: "Kelycef Dry Syrup",
                dis: ['Highly Active Against a Wide Spectrum Of Gram- Positive and Gram-Nagative Bacteria.', 'Possesses High Stability in the Presence of Beta-Lactamases.','Achieves Superior Cure And Tolerability Rtaes Compared to Cefacolor in Acute Otitis Media.']
        },
        // -------------------- capsule ---------------
        // -------------------- capsule ---------------
        {
                type: "Capsule",
                title: " the controller & maintainer",
                name: "kelyrab-l capsule",
                dis: ['calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg', 'calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg']
        },
        {
                type: "Capsule",
                title: " the controller & maintainer",
                name: "kelyrab-dsr capsule",
                dis: ['calcium carbonate 5000 mg calcitriole 25mcg + zinc 7.5mg', 'calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg']
        },
        // --------------- injection ---------------
        // --------------- injection ---------------
        {
                type: "injection",
                title: " Lansoprazole 15mg, Mouth Dissolving",
                name: "Rablc Injection",
                dis: ['Salf & Effective Way To Gerd In Kids', 'Salf & Effective Way To Gerd In Kids', 'Salf & Effective Way To Gerd In Kids']
        },

        {
                type: "injection",
                title: " Lansoprazole 15mg, Mouth Dissolving",
                name: "kelynerv Injection",
                dis: ['Promotes Methylation That Insulates Nerve Fibers', 'Corrects Neurotoxicity & Neuropathies', 'Relieves Burning Sensation, Numbness, Lodd of Sendation & Muscle Cramps in Diabetic Neuropathy.']

        }
]


// // injection product fatch 
const modal = document.getElementById("showmodal")

const productDetails = (type, img, names) => {
        arr.filter(item => {
                if (item.type === type) {
                        if (item.name === names) {
                                document.modal_image.src = img;
                                let list = item.dis.map(i => `<p><i class="fa-solid fa-caret-left"></i> ${i}</p>`).join('')
                                document.getElementById("dis").innerHTML = list;
                                document.getElementById('pro_name').innerHTML = item.name;
                                document.getElementById('pro_title').innerHTML = item.title;
                                modal.style.top = 0
                        }
                }
        })
}

const closemodal = () => {
        modal.style.top = "-110%"
}

$(document).ready(() => {
        $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                }, {
                        duration: 1500,
                        easing: 'swing',
                        step: function (now) {
                                $(this).text(Math.ceil(now));
                        }
                });
        });
})



