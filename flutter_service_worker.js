'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b7135866948c4141e14d52d5d4921fdd",
".git/config": "9151fae4dab82c8a4ade17d6ebac1ee7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "24c128890bccc404c52c57bb9b8690d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "287f5b6042cbef3b110e47c1292590a9",
".git/logs/refs/heads/main": "606412219d5e4fdc7e7bf83139aad47c",
".git/logs/refs/remotes/origin/main": "e174040f587229349beaf8d5375903ab",
".git/objects/02/6c13e3708e49fda3fcfc103675cfd84a8ce3d6": "8686b111a2f76680f778ddc3e402a4d6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/10/b757d8f79201c7a29f12890510e5e7d1b6637a": "1ca1ce7aad0dbc593419a2f95f13b9c6",
".git/objects/10/de32acad604f03ac44e4471e09335686852fc4": "7b4b2402217df7a56bebcf351be0d2ed",
".git/objects/15/b3c4c1f7ae17b940579ee87fd539690523bded": "7ed6083671c55cb555d305ecb019b2b9",
".git/objects/18/d0ae7846cb824783416934ce1fa9e55a2698e5": "fc77c52ddcdbd5b9c5d121355df5e184",
".git/objects/19/612feb38e40bf6ef2764bbc88adfc14a4f7ef9": "b6d74848cb8ec0f68cbb4e7d5008115f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/05352e397738b29e89fb1b372fbcba076f8f93": "5e5b6cf9ae8015b0cd0d1fb7f54a00f8",
".git/objects/25/b16a1850d75bf5a914720e3f22f6a36a1fcdb6": "fb901de115a8bc6f74cc73aed495d356",
".git/objects/28/7f9d76151a72e25ad4da8fe65362e7c708778e": "e79b4bca1a9e9aaa5ed45dc5e13e9720",
".git/objects/2d/13e1506e6d9ab4a0ca4fdfa92fcc0c4e14569b": "bd9318b661ea56677d0a00936a4fb13c",
".git/objects/2d/87a8789706e8e5455bde4671ba405fd2f30189": "a9063473e2a0da84266ace495dc81706",
".git/objects/2e/4043c3efc84ce5cea360b92063edc0fac11075": "68b517bacc8c5e9d846a69a6270f8d3c",
".git/objects/2f/96fd08a2835f08ed78cd906f1301c473ec8764": "667e45622b8852403454e882e0a863fb",
".git/objects/31/5a70673bd0724a21593917f6eaf11582acc12b": "fb7830747bac770e6b99e4b3f3a2d33b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/84628352ba14c6d05f872c7051e70b160b8817": "3a6980f980d55047f1e34e15aee9864b",
".git/objects/39/2305ad2a41dfedce8189911825ed20fbaa4ea2": "6512c7f4f15943a7475f3d59cf2003e3",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/32708621d958e5f012708392d0b48f2df632b8": "8d854aad30f787c81dbdb94a7e1234e5",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/cc10ddc067aae70d1f3c684f0220eb91cdbaf4": "ab1dc1c30af7cc759f6010859dc98356",
".git/objects/44/283e27a3b15f45db1456642ba4ce2ea4f09e21": "bafee562277ea7a8293403e65a12a9ce",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/5c8f31ed2e630a770010c85f62fbd4606413c1": "c48e1ed037019309014e07d0534d7aec",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6a619aed91dbcc9ef398489cc5684286025c67": "7de07c5e724317fa27c103e6f6b58248",
".git/objects/48/1ec4ecccd6521fbd6412107498608b7cb97500": "3427c9e1b8142c86a1ee37bb074b21c3",
".git/objects/49/d81871a8f45d656827aca63bb53d3332b0ff66": "427bca225b437d6588bda16b648131d0",
".git/objects/4f/76f462ad514f407dc60861bfa9aad014cf528c": "66f0ccac17ffb9bf88594e282149344b",
".git/objects/50/b08182a9e701aab207743688e15d7ef2a181a5": "3cfed68d3cdbf8ff04ed00accff8b4e4",
".git/objects/55/900e9714f8b00014f5a76483dd54b35a365b87": "e37ac99e629813a0db0b153449f09c3b",
".git/objects/56/e603ca4a1f72503468f2648aa8ac16c6128f6a": "9b357fb7f20afbeabd342ff524381a7d",
".git/objects/5c/0cf4590af0659c29d9cba8c7d7f0642f45eb6e": "f6da335e1621a6e1944c6273d3209555",
".git/objects/5c/691f44927776418ff35549b86d309232e6dd90": "6bb79a21964354171be93af323520a0f",
".git/objects/61/417dfb631d80ad504c63b8e03c4316fc3fe0df": "6a4ec55b2762fda9be96848c62417fdf",
".git/objects/61/e73aedb93652851a593ca06cd69dddad5b8531": "1d04824ae0ec80a216c5c80177621149",
".git/objects/62/28a1f22851acf7b787ff6a23b2241c34c40d0b": "2939248712ea9a2e314c561a977590d5",
".git/objects/62/de717552a8fcaad4c43c3d1e52cc94577bd635": "f74ac0e225fedf2f2d30157c0656edcc",
".git/objects/64/f2b73ca474c3262f4438b3ee7e2931307c79cd": "5d2193f2c6864de8361cb21f811047dc",
".git/objects/6a/8aa53478750b101b90571eabbd948ab6de91cc": "9a67a721ca08add2ead11fb8b66eef04",
".git/objects/6b/37c1a2e5cf347fce546f1452928b278e044111": "d9f325789cb538973ef5070e6de0af3a",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/de95b81653d0578379650f7e679bc6cf37a24a": "5698a45276ea3ed80ff07294dbfd3d81",
".git/objects/6f/e89b71be7d0cc33d83a4c95a0e3f38afd38b22": "ce4c6cd26594b500cc4ded87dc27b8d8",
".git/objects/70/28e4290332d905784ebe94401509217ac9c91e": "248d03ea88e65d58eca3b35e54ae550f",
".git/objects/79/77859c214272bcf3f303ea516140c149b71087": "42e55e322aed2aeb6c45ec2186a91625",
".git/objects/79/a2201fcf03989dc672101e1a9a33ccd980ad30": "e8e4e52105b5bc9d3eea2c5ef1ba613a",
".git/objects/7a/541b66bfc3563809f94a509760df46ff485785": "81fe878d59ab116b1b1abe1e0d8d5751",
".git/objects/7c/1f6a0d07256e485dda35ea653dae3bdd370efb": "4aea04035f0df1a337d9c63b7498c96a",
".git/objects/7f/b89ee9811167a0bcc84a84a306f5a377b7ed7b": "98e6269395be0b8333eac6dfa7829d92",
".git/objects/82/4c6f9a61efcd149a8b7389253208f00d093fa9": "6770880dcb8241d8858f5fc0698563c0",
".git/objects/82/89f7a4bf363bf6fe19e45073323dda7afc829b": "6b8c4f1a8c3f3257f2a297af10e988c4",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/58defe1630cebcf18ed1e36797eed5bd150c80": "5422cf1a395dc7c7f65f11f6db2f323a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3bd929d9f06483bf14db11cc7e140581dedb4d": "29d351397a7528c133565cc8c6faadd9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/a72a6f693faab00fff3f213a25ad2be5646ffd": "6770e2c30d37ccea14b2f07e68dc03c1",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/ccae0d57c67b3bf09b6b8e4d0404c12be6fa8e": "a5842c190cf1b3eae708065ec7a35b75",
".git/objects/97/2dd876d08a1caf858d6f0c415c70de32dd7740": "8a7f8197950d6ee8f66aa25c9607696b",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/6afd0c6393b9021adb72395a873958bc6f1d9f": "e04918fe1779abedf37ddc31b5da665f",
".git/objects/a0/a9ee49cfd98d42d92b7ec69c5475dbc6473e17": "48792b719a4ea75966ce4b167ebc6d90",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/a2/06bd4bb9f266d03374b34e797981fdc8562278": "be15561c593458dea02cb3d23301b821",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/a5/a0af3cb2bce03537c523887f5c1095a808b3d1": "2103e36ae8ae9bea1d588c1fdbc74ed3",
".git/objects/a8/42674937d1d7d7f9d8f9518902914d8e7fbd30": "26d88163802bf07d0a79e8a96bf80336",
".git/objects/a8/47d4fff46ba3463fb290c426b04e2f85244665": "1bad5fe55b3858dbddad67954dcf8436",
".git/objects/a8/9c4ef28b834e6572c5387f497fe5f417b112b9": "08cac045314e8b2e0f71b1795655e60d",
".git/objects/ab/53be21389d10d051d6050b264dda8ee1552d8e": "3404cde4bad51634959dd15d64402274",
".git/objects/ac/08e1d88f10034e0ef38c73e6c371cbce8b52da": "bfaf9d549e25431c21509c78c7874e21",
".git/objects/af/a04658bfb0e35e7b1ab89597d4540b08e14553": "a686d45722067f0376120a1dee67f390",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/681f3692a43b11934f9e7bc2d77bf99f6c1bf8": "ac89c881d70e8add66ac15a5fa846610",
".git/objects/b2/d4cdd18059e762565a0436c8e1ae8e107de890": "156ba72a248b92d2271c1262c18fed67",
".git/objects/b3/8934b50f9d048ef960f49831db66ec321857b1": "d1c42e006bc668c13500a92e020af15c",
".git/objects/b3/e91ea293ca7c3d91e6759e90ec4b91e1e7690c": "3014c9341313533dfe2e8de24d029603",
".git/objects/b5/34cde24d7e6eb2e2676c7069eeb01d7bcde5d0": "4c4c3acd94062bd430f57a897264d0ea",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/094dfb4da02464d28da3c75fc517faf4d6f44b": "0494d9680431345d17b938330efb3222",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/c8/566133e01c5bb8e1d540eb4e05a6839d2966e3": "49bb5187bcdae0b97da815a075512c2a",
".git/objects/cc/09a88aaefe4ecb722d63aabf35e63e7b4fca9c": "f584d4304af42e6832c463163e773807",
".git/objects/cd/5c6322b30ffb45f92294890cdd790200275a27": "b718fd3d9627914e1e70371f177fad9d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/98a0f3c4b74d4e7f6e34375c359050e4818ab2": "60dca089f1da9ab026aa35a1a559b304",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e0/1eff787f0c376b87a17b76468350adf00dd72b": "27e593d6f646ce7dac3100aa5d50cfaf",
".git/objects/e8/1133cddfa675f0f9708b7db87bae474c2b2f32": "b3200c140318272c519532d87febd980",
".git/objects/e8/1c90c78850ba04d3e39a9df67584826c380455": "c28f81489c3e06a6ac6a248cddd98b95",
".git/objects/ea/388308166e7aed4d7ff9fd40abf8781e5beb71": "51230f9020fd27602e188ebf9d790f37",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/7478c235bc28091a3e0da95aa794e2f2b7553a": "0acc6501038b405b16aa84dcc03f1141",
".git/objects/ed/e35c661ab9fef03c55f46625da4f15111b7d01": "c00a4cb757bee44738fa50ceb5d76502",
".git/objects/f0/0dfd902c6f5f4b6b99c851cb1a773bbf00e45d": "d7308790bd6b271e82cc578577dd4a7c",
".git/objects/f0/52022a07911ea45c3d245b8add390b5ae83a57": "36bff5b24210c064378877510d2730e9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/f101b32514ed8672c7d566116cd60e8b514353": "7df026e76a11223694e9d93ce2dc22de",
".git/objects/f9/f763d97b272a197a2a15295a0a20fa42dddc17": "d72c98740dfcb4ca824b715913126a4d",
".git/objects/fc/d104bd695c0e0c84d57c0ca6960b2dad8030ed": "b833627e871415e7bda31b26c73a5bd7",
".git/refs/heads/main": "865e1741e5f1756f38f7aa7e897860fd",
".git/refs/remotes/origin/main": "865e1741e5f1756f38f7aa7e897860fd",
"assets/AssetManifest.bin": "9b6efd13c57662a1bdc8395ab566f697",
"assets/AssetManifest.bin.json": "490d40f3fb9f7f612c58105b10cca755",
"assets/AssetManifest.json": "7382a4293eb88a391a6da61a53faf684",
"assets/assets/images/eventos/Slide1.PNG": "a3440666759b7104ec0eddc164a8728b",
"assets/assets/images/eventos/Slide2.PNG": "991f90a88f3b0eb480e333102fc4c1d1",
"assets/assets/images/eventos/Slide3.PNG": "43b3135380c6705230ec6427520e1a02",
"assets/assets/images/eventos/Slide4.PNG": "6e5424423ca48241703ed0ae046cc5ab",
"assets/assets/images/eventos/Slide5.PNG": "268c2fba0d174aa73c1964cd604ab203",
"assets/assets/images/eventos/Slide6.PNG": "0ad29f53dd0d496b8a4fbf4e91e7deb9",
"assets/assets/images/logo.png": "034671667bafe2501dca7f9779ff6bf7",
"assets/assets/images/titular.jpg": "778bee3c1c03317f1a70806c0f711952",
"assets/assets/images/titular.png": "2e10e2466d83e35c552c2db1d5e84b66",
"assets/assets/images/titular_2.png": "56e8d439037ab22a06c4bad09dd65fee",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Acceso%2520a%2520bienes%2520(2).pdf": "e5eebfa9a2495abde31884148384fee1",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Acceso%2520a%2520bienes.pdf": "e5eebfa9a2495abde31884148384fee1",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Bienestar%2520y%2520Salud%2520mental%2520(2).pdf": "39ba1adf866f7909895c73090af89ccb",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Bienestar%2520y%2520Salud%2520mental.pdf": "39ba1adf866f7909895c73090af89ccb",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Ciudad.pdf": "37ed0581c1caa7e4c6849cec391c3ff9",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Confianza%2520(2).pdf": "0d007ae8e0f6515eba4ec805a0698e30",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Confianza.pdf": "0d007ae8e0f6515eba4ec805a0698e30",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Espacio%2520P%25C3%25BAblico.pdf": "9918c60f517cb772d2ffe0fb889b81c8",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Material.pdf": "c921fa272d5762037a72639b8c714925",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Movilidad.pdf": "c96a1baf95656e4287150b8fd0702817",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Participaci%25C3%25B3n.pdf": "e61ecc25b787eb3184259f8e9670df62",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Participaci%25C3%25B3n_.pdf": "e61ecc25b787eb3184259f8e9670df62",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Problem%25C3%25A1tica.pdf": "20cba43daf57aa79df0de36c890041fb",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Relacionamiento.pdf": "a38ae54062286df573e77848d67e2918",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Seguridad.pdf": "9fee151aacf96e42ef9fce1d18aa2655",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Dimensi%25C3%25B3n%2520Sociodemogr%25C3%25A1fico.pdf": "45e646f0464c505e83deb5328db4efbf",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Encuesta%2520de%2520Percepci%25C3%25B3n%2520de%2520Bienestar%2520&%2520Seguridad%25202025.pdf": "c5eda9dccf63dae4408be6fa5ac1e1a5",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Fuentes.pdf": "cd765777e1c0c9f210ec3e918f3b56eb",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Glosario.pdf": "d85db0d298178cb4d048282049a7b8e8",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Panorama%2520General.pdf": "b6293c003dcae0605f98176c3926f9b4",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Material/Reflexi%25C3%25B3n%2520general.pdf": "f0e7fa8dadfbb8df00703aa10df4ab7f",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Sociodemogr%25C3%25A1fico/Dimensi%25C3%25B3n%2520Sociodemogr%25C3%25A1fico.pdf": "af255d59545bad744112b8928dddfc89",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Sociodemogr%25C3%25A1fico/Ocupaci%25C3%25B3n%2520Subdimensi%25C3%25B3n.pdf": "d77f42937eefe94fe233c2ffc2ac6344",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Dimensi%25C3%25B3n%2520Sociodemogr%25C3%25A1fico/Subdimensi%25C3%25B3n%2520Identificaci%25C3%25B3n.pdf": "837944f08933035ea6b6da269ce0baa9",
"assets/assets/pdf/Encuesta_de_Percepci%25C3%25B3n_de_Bienestar_Seguridad_2025/Encuesta.pdf": "8507fba11f793ff0638136c1e7e2a2c0",
"assets/assets/pdf/ficha_tecnica.pdf": "aad99fc668558e72655fbbef58d85fd2",
"assets/assets/pdf/objetivos_metodologia.pdf": "e562169e57af1f5c0df1672042a4fbc8",
"assets/assets/pdf/panorama_general/Defunciones.pdf": "dc15da3680dbbc13ef6e52294885d903",
"assets/assets/pdf/panorama_general/Delitos.pdf": "9635089cbcfee460ff49e477f75c6d38",
"assets/assets/pdf/panorama_general/Desempleo.pdf": "796f9e150df5817de0211f931511698a",
"assets/assets/pdf/panorama_general/Fallecidos%2520de%2520Transito.pdf": "7faa3a9769b0b9e33dc0a3daa614e1aa",
"assets/assets/pdf/panorama_general/Incivilidades.pdf": "e7525d070e8d3263c35d19d195d2214f",
"assets/assets/pdf/panorama_general/Informaci%25C3%25B3n%2520general.pdf": "0ba9a831b3aa6d233a5993766e91c0ee",
"assets/assets/pdf/panorama_general/Lesionados%2520de%2520Tr%25C3%25A1nsito.pdf": "88a7e2a1446045a36e790fad47f479b8",
"assets/assets/pdf/panorama_general/panorama_general.pdf": "dc07503440d57bd4a1fe73e029aecf1a",
"assets/assets/pdf/panorama_general/Robo%2520a%2520personas.pdf": "b34074797803c7bd27d45f3ab99c71d8",
"assets/assets/pdf/panorama_general/Siniestros%2520de%2520transito.pdf": "c007652299b445d3f7c502aed4201b2d",
"assets/assets/pdf/panorama_general/Violencia%2520Psicol%25C3%25B3gica%2520contra%2520la%2520mujer.pdf": "e46cc2148c2d6cef095d632950cff8b1",
"assets/assets/pdf/portada.pdf": "f148f6199573ed1356ee499ac3cc0790",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ecc6908802b84fb7e4c5fb43208cb278",
"assets/NOTICES": "014af7a654d5a2e562ac0d266af3c498",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7b27d9d2520fd06dc61a5674d27a1cd9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "47648655b516f237b9c1e200892389b7",
"/": "47648655b516f237b9c1e200892389b7",
"main.dart.js": "b02535de74c51969c09604a3ba6d93d5",
"manifest.json": "6724269bb238323298befee5200dcee9",
"version.json": "a053d51f0c6d1deed0b07a971add7019"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
