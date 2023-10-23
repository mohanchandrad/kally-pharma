


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
                title: "control acidity, relive symptoms ",
                name: "kELYRAB-20 Tablet",
                dis: [" Have a more sustained acid-suppressing effect than other proton pump inhibitors ", "Significantly increases the pH", "Decreases the volume of gastric contents", "A night before surgery provides adequate prophylaxis for acid aspiration syndrome. "]
        },
        {
                type: "Tablet",
                title: "Versalile Anlibiolic against Multiple Infeclions ",
                name: "kelycef-200 Tablet",
                dis: ["Cefpodoxime 200mg", "Ensures Higher Efficacy in tough Infection.", "Useful alternative to parenteral therapy", 'Effective in Pharynotonsillitis.',
        'Promising result in typhoid Fever.']
        },
        {
                type: "Tablet",
                title: "Wise Player for Secure Victory ",
                name: "kelycef-cv Tablet",
                dis: ["Cefpodoxime 200mg + Clavulanic acid 125mg ", "|deal switch over from IV Ceftriaxone in serious RTI.", "Ensure high efficacy in tough infections", "Extends spectrum of cefpodoxime against beta lactamase strains."]
        },
        {
                type: "Tablet",
                title: "Bone Growth formula with vital nutrients ",
                name: "ridabone-ct Tablet",
                dis: ['Calcium carbonate 500mg + calcitriole .25mcg + zinc 7.5mg. ','Most Important nutrient in reducing risk of osteoporosis', '|ncreases calcium absorption', "Stimulates timulates bone bone mineralization mineralization and and preserves b bone mass."]
        },
        {
                type: "Tablet",
                title: "Supreme Performer with Complete Authority ",
                name: "kelymox Table",
                dis: ['Amoxiciline + clavulanic acid ', 'Highly effective against resistant pathogens unlike cephalosporins.', 'Effective against gram-ve pathogens like E-Coli, enterobacter species.', 'Studies have demonstrated the efficacy of complicated and uncomplicated simple & recurrent UTI.']
        },

        {
                type: "Tablet",
                title: "Alleviate Symptoms of ALLERGIC RHINITIS & ASTHMA with ",
                name: "mtln Tablet",
                dis: ['Montelukast 10mg + Levocetrizine 5mg ', 'Specially targets the cysteinyl leukotriene receptor.','More effective than placebo in reducing the naso-ocular symptoms. ']
        },
        {
                type: "Tablet",
                title: "gceclofenac 1 gOmg1 ; Parf:_zeBTg_gl 325mg + Serratiopeptidase 15mg ",
                name: "kwikril-sp tablet",
                dis: ['Aceclofenac was significanty more effective than diclofenac in improving  Knee flexion after 2-4  weeks treatment ', ' Better safety than conventional NSAIDa with respect to adverse effects on Gastrointestinal & cardiovascular system',' Patients with symptomatic OA of the Knee showed a greater improvement in pain & functional capacity with aceclofenac than paracetamol ']
        },
        {
                type: "Tablet",
                title: "Safe & effective way to treat GERD in Kids",
                name: "kelyrab-JR tablet",
                dis: ['Lansoprazole 15mg. mouth dissolving tab.', 'Lansoprazole is significantly better than treatments  of infants with an extensively hydrolyzed formula.', 'Lansoprazole provide faster symptom relief & are effective in healing erosive esophagitis in patients unresponsive to HRRAs.? ']
        },
        //--------------------- syrup -------------------
        //--------------------- syrup -------------------
        {
                type: "syrup",
                title: " FERROUS ASCORBATE & FOLIC ACID ",
                name: "kelyfer-xt syrup",
                dis: ['Ferrous ascorbate 30mg + Folic acid 550mcg/ 5ml ', 'Most efficient enhancer of non-heme iron absorption', ' Absorbed three times more than ferric form of iron ', 'Essential for formation of RBCs ','Does not causes constipation ']
        },
        {
                type: "syrup",
                title: "Support Immunity and Growth",
                name: "kelyfull-jr syrup",
                dis: ['Lysine+ multivitamins and multiminerals. ', 'Provides a natural supply of essential amino acids and non-essential amino acids','Promotes healthy cells and immune system ','L-lysine & Vitamin B to help support a healthy immune system ', 'Calcium to help maintain strong, healthy bones & teeth']
        },
        {
                type: "syrup",
                title: " the controller & maintainer",
                name: "kelyzinc syrup",
                dis: ['calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg', 'calcium carbonate 500 mg calcitriole 25mcg + zinc 7.5mg']
        },
        {
                type: "syrup",
                title: "Protect the Small Ones Form Harshn Infection",
                name: "kelycef syrup",
                dis: ['Cefpodoxime 50mg/100mg ', 'Possesses high stability in the presence of beta-lactamases.', 'Highly active against a wide spectrum of Gram-positive and gram-negative bacteria.', 'Achieves superior cure and tolerability rates compared to cefaclor in acute otitis media. ']
        },
        {
                type: "syrup",
                title: "A Remedy for Pedia Infections",
                name: "Kelymox",
                dis: ['Amoxiciline + clavulanic acid ', 'Active against a wide range of bacteria  including beta-lactamase producers', 'Excellent clinical result in varied infections', 'Time-tested and proven combination ', 'Stable in presence of gastric acid']
        },
        {
                type: "syrup",
                title: "Cefpodoxime 50mg/100mg",
                name: "Kelycef Dry Syrup",
                dis: ['Cefpodoxime 50mg/100mg ', 'Possesses high stability in the presence of beta-lactamases.', 'Highly active against a wide spectrum of Gram-positive and gram-negative bacteria.', 'Achieves superior cure and tolerability rates compared to cefaclor in acute otitis media. ']
        },
        // -------------------- capsule ---------------
        // -------------------- capsule ---------------
        {
                type: "Capsule",
                title: "Stomach Regain Its Lost Tone ",
                name: "kelyrab-l capsule",
                dis: ['Rabeprazole 20mg+Levosulpride 75mg ', ' Inhibits acid output to a greater degree and over a longer period of time compared to pantoprazole.', 'Superior to domperidone, metoclopramide and  placebo in overall clinical improvement as well as in relieving symptoms such as postprandial  bloating, epigastric pain and heartburn. ']
        },
        {
                type: "Capsule",
                title: " CONTINUOUS Acid Reflux Needs Potent & Fast Cntrol",
                name: "kelyrab-dsr capsule",
                dis: ['Rabeprazole 20mg+Domperidone 30mg SR ', 'Provides fast and potent relief from heartburn and other symptoms of ronerosive GERD.', 'Improves GERD Symptoms such as regurgitation and belching.', 'Alleviates nausea by accelerating gastric emptying.']
        },
        // --------------- injection ---------------
        // --------------- injection ---------------
        {
                type: "injection",
                title: " High Performance against reflux oesophagitis” ",
                name: "Kelyrab-iv Injection",
                dis: ['Rabeprazole 20mg ', 'A New & effective proton pump inhibitor. ', 'Well tolerated  Rabeprazole has shown clinical effectiveness in healing oesophageal lesions and reducing thefrequency & intensity of heartburn associated with erosive/ulcerative oseophagitis in patient of GERD.', ' High performance liquid chromatography ']
        },

        {
                type: "injection",
                title: "For the maintenance of Perfect Neurons. ",
                name: "kelynerv Injection",
                dis: ['Methylcobalamine 1500mcg+Nicotinamide 100mg+Pyridoxine 100mg ', 'Promotes Methylation that insulates nerve fibers ', 'Corrects Neurotoxicity & Neuropathies', 'Relieves burning sensations, numbness, loss of sensation & muscle cramps in diabetic neuropathy. ']

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



