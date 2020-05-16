/**
 *
 * @param {string} message - message to be printed
 */
function print(message) {
  document.write(message);
}

/**
 * takes an array and creates a HTML <ol>
 * @param {array} list
 * @return {string}
 */
function printList( list ) {
  let listHTML = `<ol>`;
  for (i = 0; i < list.length; i += 1) {
    listHTML += `<li>${list[i]}</li>`;
  }
  listHTML += `</ol>`;
  return listHTML;
}

/**
 * gets a random number between 0 and the length of the ALL_QUESTIONS array
 * @return {number}
 */
function getRandomNumber() {
  return randNum = Math.floor(Math.random() * ALL_QUESTIONS.length );
}

const ALL_QUESTIONS = [
  ['What is the capital city of Afghanistan?', 'kabul'],
  ['What is the capital city of Albania?', 'tirana'],
  ['What is the capital city of Algeria?', 'algiers'],
  ['What is the capital city of Andorra?', 'andorra la vella'],
  ['What is the capital city of Angola?', 'luanda'],
  ['What is the capital city of Antigua and Barbuda?', 'saint john\'s'],
  ['What is the capital city of Argentina?', 'buenos aires'],
  ['What is the capital city of Armenia?', 'yerevan'],
  ['What is the capital city of Australia?', 'canberra'],
  ['What is the capital city of Austria?', 'vienna'],
  ['What is the capital city of Azerbaijan?', 'baku'],
  ['What is the capital city of The Bahamas?', 'nassau'],
  ['What is the capital city of Bahrain?', 'manama'],
  ['What is the capital city of Bangladesh?', 'dhaka'],
  ['What is the capital city of Barbados?', 'bridgetown'],
  ['What is the capital city of Belarus?', 'minsk'],
  ['What is the capital city of Belgium?', 'brussels'],
  ['What is the capital city of Belize?', 'belmopan'],
  ['What is the capital city of Benin?', 'porto-novo'],
  ['What is the capital city of Bhutan?', 'thimphu'],
  ['What is the capital city of Bolivia?', 'la paz'],
  ['What is the capital city of Bosnia and Herzegovina?', 'sarajevo'],
  ['What is the capital city of Botswana?', 'gaborone'],
  ['What is the capital city of Brazil?', 'brasilia'],
  ['What is the capital city of Brunei?', 'bandar seri begawan'],
  ['What is the capital city of Bulgaria?', 'sofia'],
  ['What is the capital city of Burkina Faso?', 'ouagadougou'],
  ['What is the capital city of Burundi?', 'bujumbura'],
  ['What is the capital city of Cambodia?', 'phnom penh'],
  ['What is the capital city of Cameroon?', 'yaounde'],
  ['What is the capital city of Canada?', 'ottawa'],
  ['What is the capital city of Cape Verde?', 'praia'],
  ['What is the capital city of Central African Republic?', 'bangui'],
  ['What is the capital city of Chad?', 'n\'djamena'],
  ['What is the capital city of Chile?', 'santiago'],
  ['What is the capital city of China?', 'beijing'],
  ['What is the capital city of Colombia?', 'bogota'],
  ['What is the capital city of Comoros?', 'moroni'],
  ['What is the capital city of The Republic of the Congo?', 'brazzaville'],
  ['What is the capital city of The Democratic Republic of the Congo?',
    'kinshasa'],
  ['What is the capital city of Costa Rica?', 'san jose'],
  ['What is the capital city of Cote d\'Ivoire?', 'abidjan'],
  ['What is the capital city of Croatia?', 'zagreb'],
  ['What is the capital city of Cuba?', 'havana'],
  ['What is the capital city of Cyprus?', 'nicosia'],
  ['What is the capital city of Czech Republic?', 'prague'],
  ['What is the capital city of Denmark?', 'copenhagen'],
  ['What is the capital city of Djibouti?', 'djibouti'],
  ['What is the capital city of Dominica?', 'roseau'],
  ['What is the capital city of Dominican Republic?', 'santo domingo'],
  ['What is the capital city of East Timor (Timor-Leste)?', 'dili'],
  ['What is the capital city of Ecuador?', 'quito'],
  ['What is the capital city of Egypt?', 'cairo'],
  ['What is the capital city of El Salvador?', 'san salvador'],
  ['What is the capital city of Equatorial Guinea?', 'malabo'],
  ['What is the capital city of Eritrea?', 'asmara'],
  ['What is the capital city of Estonia?', 'tallinn'],
  ['What is the capital city of Ethiopia?', 'addis ababa'],
  ['What is the capital city of Fiji?', 'suva'],
  ['What is the capital city of Finland?', 'helsinki'],
  ['What is the capital city of France?', 'paris'],
  ['What is the capital city of Gabon?', 'libreville'],
  ['What is the capital city of The Gambia?', 'banjul'],
  ['What is the capital city of Georgia?', 'tbilisi'],
  ['What is the capital city of Germany?', 'berlin'],
  ['What is the capital city of Ghana?', 'accra'],
  ['What is the capital city of Greece?', 'athens'],
  ['What is the capital city of Grenada?', 'saint george\'s'],
  ['What is the capital city of Guatemala?', 'guatemala city'],
  ['What is the capital city of Guinea?', 'conakry'],
  ['What is the capital city of Guinea-Bissau?', 'bissau'],
  ['What is the capital city of Guyana?', 'georgetown'],
  ['What is the capital city of Haiti?', 'port-au-prince'],
  ['What is the capital city of Honduras?', 'tegucigalpa'],
  ['What is the capital city of Hungary?', 'budapest'],
  ['What is the capital city of Iceland?', 'reykjavik'],
  ['What is the capital city of India?', 'new delhi'],
  ['What is the capital city of Indonesia?', 'jakarta'],
  ['What is the capital city of Iran?', 'tehran'],
  ['What is the capital city of Iraq?', 'baghdad'],
  ['What is the capital city of Ireland?', 'dublin'],
  ['What is the capital city of Israel?', 'jerusalem'],
  ['What is the capital city of Italy?', 'rome'],
  ['What is the capital city of Jamaica?', 'kingston'],
  ['What is the capital city of Japan?', 'tokyo'],
  ['What is the capital city of Jordan?', 'amman'],
  ['What is the capital city of Kazakhstan?', 'astana'],
  ['What is the capital city of Kenya?', 'nairobi'],
  ['What is the capital city of Kiribati?', 'tarawa atoll'],
  ['What is the capital city of North Korea?', 'pyongyang'],
  ['What is the capital city of South Korea?', 'seoul'],
  ['What is the capital city of Kosovo?', 'pristina'],
  ['What is the capital city of Kuwait?', 'kuwait city'],
  ['What is the capital city of Kyrgyzstan?', 'bishkek'],
  ['What is the capital city of Laos?', 'vientiane'],
  ['What is the capital city of Latvia?', 'riga'],
  ['What is the capital city of Lebanon?', 'beirut'],
  ['What is the capital city of Lesotho?', 'maseru'],
  ['What is the capital city of Liberia?', 'monrovia'],
  ['What is the capital city of Libya?', 'tripoli'],
  ['What is the capital city of Liechtenstein?', 'vaduz'],
  ['What is the capital city of Lithuania?', 'vilnius'],
  ['What is the capital city of Luxembourg?', 'luxembourg'],
  ['What is the capital city of Macedonia?', 'skopje'],
  ['What is the capital city of Madagascar?', 'antananarivo'],
  ['What is the capital city of Malawi?', 'lilongwe'],
  ['What is the capital city of Malaysia?', 'kuala lumpur'],
  ['What is the capital city of Maldives?', 'male'],
  ['What is the capital city of Mali?', 'bamako'],
  ['What is the capital city of Malta?', 'valletta'],
  ['What is the capital city of Marshall Islands?', 'majuro'],
  ['What is the capital city of Mauritania?', 'nouakchott'],
  ['What is the capital city of Mauritius?', 'port louis'],
  ['What is the capital city of Mexico?', 'mexico city'],
  ['What is the capital city of Federated States of Micronesia?', 'palikir'],
  ['What is the capital city of Moldova?', 'chisinau'],
  ['What is the capital city of Monaco?', 'monaco (city state)'],
  ['What is the capital city of Mongolia?', 'ulaanbaatar'],
  ['What is the capital city of Montenegro?', 'podgorica'],
  ['What is the capital city of Morocco?', 'rabat'],
  ['What is the capital city of Mozambique?', 'maputo'],
  ['What is the capital city of Myanmar?', 'naypyidaw'],
  ['What is the capital city of Namibia?', 'windhoek'],
  ['What is the capital city of Nauru?', 'yaren'],
  ['What is the capital city of Nepal?', 'kathmandu'],
  ['What is the capital city of The Netherlands?', 'amsterdam'],
  ['What is the capital city of New Zealand?', 'wellington'],
  ['What is the capital city of Nicaragua?', 'managua'],
  ['What is the capital city of Niger?', 'niamey'],
  ['What is the capital city of Nigeria?', 'abuja'],
  ['What is the capital city of Norway?', 'oslo'],
  ['What is the capital city of Oman?', 'muscat'],
  ['What is the capital city of Pakistan?', 'islamabad'],
  ['What is the capital city of Palau?', 'melekeok'],
  ['What is the capital city of Panama?', 'panama city'],
  ['What is the capital city of Papua New Guinea?', 'port moresby'],
  ['What is the capital city of Paraguay?', 'asuncion'],
  ['What is the capital city of Peru?', 'lima'],
  ['What is the capital city of The Philippines?', 'manila'],
  ['What is the capital city of Poland?', 'warsaw'],
  ['What is the capital city of Portugal?', 'lisbon'],
  ['What is the capital city of Qatar?', 'doha'],
  ['What is the capital city of Romania?', 'bucharest'],
  ['What is the capital city of Russia?', 'moscow'],
  ['What is the capital city of Rwanda?', 'kigali'],
  ['What is the capital city of Saint Kitts and Nevis?', 'basseterre'],
  ['What is the capital city of Saint Lucia?', 'castries'],
  ['What is the capital city of Saint Vincent and the Grenadines?',
    'kingstown'],
  ['What is the capital city of Samoa?', 'apia'],
  ['What is the capital city of San Marino?', 'san marino'],
  ['What is the capital city of Sao Tome and Principe?', 'sao tome'],
  ['What is the capital city of Saudi Arabia?', 'riyadh'],
  ['What is the capital city of Senegal?', 'dakar'],
  ['What is the capital city of Serbia?', 'belgrade'],
  ['What is the capital city of Seychelles?', 'victoria'],
  ['What is the capital city of Sierra Leone?', 'freetown'],
  ['What is the capital city of Singapore?', 'singapore'],
  ['What is the capital city of Slovakia?', 'bratislava'],
  ['What is the capital city of Slovenia?', 'ljubljana'],
  ['What is the capital city of Solomon Islands?', 'honiara'],
  ['What is the capital city of Somalia?', 'mogadishu'],
  ['What is the capital city of South Africa?', 'cape town '],
  ['What is the capital city of South Sudan?', 'juba'],
  ['What is the capital city of Spain?', 'madrid'],
  ['What is the capital city of Sri Lanka?', 'sri jayewardenepura kotte'],
  ['What is the capital city of Sudan?', 'khartoum'],
  ['What is the capital city of Suriname?', 'paramaribo'],
  ['What is the capital city of Swaziland?', 'mbabane'],
  ['What is the capital city of Sweden?', 'stockholm'],
  ['What is the capital city of Switzerland?', 'bern'],
  ['What is the capital city of Syria?', 'damascus'],
  ['What is the capital city of Taiwan?', 'taipei'],
  ['What is the capital city of Tajikistan?', 'dushanbe'],
  ['What is the capital city of Tanzania?', 'dodoma'],
  ['What is the capital city of Thailand?', 'bangkok'],
  ['What is the capital city of Togo?', 'lome'],
  ['What is the capital city of Tonga?', 'nuku\'alofa'],
  ['What is the capital city of Trinidad and Tobago?', 'port-of-spain'],
  ['What is the capital city of Tunisia?', 'tunis'],
  ['What is the capital city of Turkey?', 'ankara'],
  ['What is the capital city of Turkmenistan?', 'ashgabat'],
  ['What is the capital city of Tuvalu?', 'funafuti'],
  ['What is the capital city of Uganda?', 'kampala'],
  ['What is the capital city of Ukraine?', 'kyiv'],
  ['What is the capital city of United Arab Emirates?', 'abu dhabi'],
  ['What is the capital city of United Kingdom?', 'london'],
  ['What is the capital city of United States of America?', 'washington d.c.'],
  ['What is the capital city of Uruguay?', 'montevideo'],
  ['What is the capital city of Uzbekistan?', 'tashkent'],
  ['What is the capital city of Vanuatu?', 'port-vila'],
  ['What is the capital city of Vatican City (Holy See)?', 'vatican city'],
  ['What is the capital city of Venezuela?', 'caracas'],
  ['What is the capital city of Vietnam?', 'hanoi'],
  ['What is the capital city of Yemen?', 'sanaa'],
  ['What is the capital city of Zambia?', 'lusaka'],
  ['What is the capital city of Zimbabwe?', 'harare'],
];

let score = 0;
let rank = '';
const CORRECT_QUESTIONS = [];
const WRONG_QUESTIONS = [];

for (i = 0; i < 10; i += 1) {
  const RANDOM_QUESTION = getRandomNumber();
  const ANSWER = prompt(ALL_QUESTIONS[RANDOM_QUESTION][0]);
  if (ANSWER.toLowerCase() === ALL_QUESTIONS[RANDOM_QUESTION][1]) {
    CORRECT_QUESTIONS.push(ALL_QUESTIONS[RANDOM_QUESTION][0]);
    score += 1;
  } else if ( ANSWER.toLowerCase() === 'quit') {
    break;
  } else {
    WRONG_QUESTIONS.push(ALL_QUESTIONS[RANDOM_QUESTION][0]);
  }
}

if (score < 3) {
  rank = 'You could to do better. Try again.';
} else if (score >= 3 && score < 4) {
  rank = 'Not to shabby. Keep trying to improve your score.';
} else if (score >= 4 && score < 6) {
  rank = 'Well Done. Your on your way to geography greatness';
} else {
  rank = 'Congrats! Your a geography master';
}

const FINAL_SCORE_MESSAGE = `Your scored ${score} out of ${i}`;
print(`${FINAL_SCORE_MESSAGE}. ${rank}`);
print(`<h2>You Answered These Questions Correctly</h2>`);
print(printList(CORRECT_QUESTIONS));
print(`<h2>You Answered These Questions Incorrectly</h2>`);
print(printList(WRONG_QUESTIONS));
