import {Fermer, Flowers, TV} from "../../public";
import features from "@/app/sections/features/Features";

export const translations = {
         ru: {
             header: {
                    home: 'Главная',
                    about: 'О нас',
                    advantages: 'Преимущества',
                    reviews: 'Отзывы',
                    vacancies: 'Вакансии',
                    contacts: 'Контакты',
                },
             heading: {
                 title: 'Railtok Recruitment это компания которая предоставляет работу во многих странах Евросоюза.',
                 description: 'Надоела старая работа? Хочешь поменять работодателя? Плохое жилье? Маленькая зарплата? Неуважительное отношение? Тогда сразу пишите менеджеру - он подберет вакансию, которая точно вам понравится!'
             },
             about: {
             title: 'Немного о нас',
                 description: 'Наша компания предоставляет работу для граждан Украины, Молдовы, Белорусии, Средней Азии в возрасте от 18 до 60+ лет.',
                 p1: 'Мы работаем только с проверенными работодателями, поэтому трудоустройство только официальное.',
                 p2: 'Если у вас нет рабочей визы или приглашения для работы но вы хотите работать - не проблема, мы поможем вам оформить все документы.',
                 p3: 'Мы проводим полное сопровождение как на этапе подбора, так и на протяжении всего периода трудовой деятельности. Наши координаторы вас никогда не бросят с нерешенным вопросом.'
             },
             contacts: {
                 title: 'Напишите нам сейчас чтобы узнать больше информации!'
             },
             houses: {
                 title: 'Несколько примеров жилья по нашим вакансиям'
             },
             review: {
                 title: "О нас говорят",
                 description: "Почитайте отзывы клиентов, которые уже сотрудничали с нами. Возможно они вдохновят Вас обратиться за трудоустройством именно в нашу компанию. Мы в свою очередь поможем Вам с трудоустройством, жильем и документами максимально быстро и качественно!",
                    reviews: [
                        {name: 'Кристина Гончаренко 32 года', date: '12.12.2021', reviewText: 'Благодарна компании Railtok за трудоустройство, внимательно и спокойно подбирали вакансию, хотя я была честно говоря придирчива, но менеджер Александр был терпелив. Еще раз спасибо.'},
                        {name: 'Дарья Луценко 56 лет', date: '15.01.2022', reviewText: 'Поїхала на працю до Польщі від іншої агенції, але мене там обманули і треба було шукати дуже швидко нову роботу, мені дали номер Олександра. Дуже дякую йому за допомогу, зараз я працюю завдяки йому на нормальній роботі.'},
                        {name: 'Иван Кривенко 28 лет', date: '23.02.2022', reviewText: 'Скажу коротко - все добре, житло бувало і краще, але бувало й гірше, але працювати й жити можна.'},
                        {name: 'Нурсултан Абибулаев 35 лет ', date: '05.03.2022', reviewText: 'Я гражданин Казахстана, сначала боялся делать документы, но все-таки решился и не пожалел, что именно через компанию Railtok. Подготовили весь пакет документов для получения польской рабочей визы, все сделали как и обещали. Отдельно спасибо Александру за внимательность и оперативность.'},
                        {name: 'Ана и Кирилл Зеленко 19 и 23 года', date: '19.03.2022', reviewText: 'Мы семейная пара, поехали во Францию на работу и скажу вам, что мы не разочарованы, а наоборот очень рады, что поехали через эту компанию.'},
                        {name: 'Ксения и Вадим Алиевы 35 и 41 год', date: '30.03.2022', reviewText: 'Мы с подругою поїхали на роботу до Польщі, це був наш перший виїзд за кордон, але завдяки Олександру він пройшов дуже добре, дякую.'},
                    ]
             },
             features: [['Официальное трудоустройство', 'Проверенные работодатели',"Вакансии для мужчин, женщин и семейных пар","Вакансии по Umowa Zlecenia и Umowa o pracę" ],
             ['Рабочее жилье (квартиры, дома, хостел)', 'Отдельные комнаты для семейных пар', 'Рабочее жилье с детьми от 8 лет', 'Доплата за свое жилье' ],
['Изготовление документов', 'Польская рабочая виза', 'Справка студента', 'Параграф 24 в Германии', 'Прописка, налоговый номер, страховка и банковский счет'],
],
             vacancies: {
                 title: 'Популярные вакансии',
                 description: 'Выберите вакансию, которая вас интересует, и свяжитесь с менеджером для получения дополнительной информации.',
                cards:[
                    {
                        "id": 1,
                        "country": "Франция, город Лилль",
                        "title": "Работа с деревьями и растениями",
                        "sellary": "10 €/час нетто",
                        "description": [
                            "Требуется один человек с опытом работы с растениями",
                            "Обрезка и посадка деревьев, растений",
                            "Уход за садами",
                            "Создание садов",
                            "Посев и стрижка газонов"
                        ],
                        "schedule": "8 часов в день, 5 дней в неделю (возможны дополнительные часы)",
                        "accommodation": "Жилье предоставляется (200 евро в месяц)",
                        "requirements": "Желаемый опыт работы с растениями",
                        "food": "Питание за свой счет",
                    },
                    {
                        "id": 2,
                        "country": "Германия, около города Штутгарт",
                        "schedule": "8 часов в день, 5 дней в неделю (возможны дополнительные часы)",
                        "sellary": "11 €/час нетто",
                        "title": "Работа в овощном хозяйстве на тракторах",
                        "description": [
                            "Требуется 5 мужчин с правами на трактор",
                            "Поддержка в уходе за овощными культурами",
                            "Помощь в посеве, борьбе с сорняками и внесении удобрений.",
                            "Помощь в сборе овощей",
                            "Использование тракторов для транспортировки овощных культур/труб/удобрений в большие контейнеры."
                        ],
                        "accommodation": "Жилье предоставляется (200 евро в месяц)",
                        "food": "Питание за свой счет",
                        "backgroundImage": "Фермер",
                        "requirements": "Желаемый опыт работы с тракторами"
                    },
                    {
                        "id": 3,
                        "country": "Польша",
                        "title": "Работа на заводе по производству телевизоров",
                        "sellary": "25.6 zł/час нетто",
                        "description": [
                            "Сборка компонентов на производственной линии и укладка материалов",
                            "Транспортировка тележек к производственной линии",
                            "Поднятие телевизоров и упаковка их в картонные коробки",
                            "Установка мониторов в телевизоры",
                            "Работа в отделе упаковки готовой продукции пленкой"
                        ],
                        "schedule": "8 часов в день, 5 дней в неделю (возможны дополнительные часы)",
                        "accommodation": "Жилье предоставляется бесплатно",
                        "requirements": "Желаемый опыт работы с электроникой",
                        "food": "Питание за свой счет, есть столовая",
                    }
                ]
         },
                 footer: {
        title: 'Ссылки на группы с вакансиями',
        link1: 'Вакансии в Польше',
        link2: 'Вакансии в западной Европе',
        link3: 'Вакансии в Эстонии',
    },
             button : 'Написать менеджеру'}
         ,
            en: {
                header: {
                    home: 'Home',
                    about: 'About',
                    advantages: 'Advantages',
                    reviews: 'Reviews',
                    vacancies: 'Vacancies',
                    contacts: 'Contacts',
                },
                heading: {
                    title: 'Railtok Recruitment is a company that provides work in many European Union countries.',
                    description: 'Tired of the old job? Want to change employer? Bad housing? Low salary? Bad attitude? Then write to the manager right away - he will pick up a vacancy that you will definitely like!'
                },
                about: {
                    title: 'A little about us',
                    description: 'Our company provides work for citizens of Ukraine, Moldova, Belarus, Central Asia aged 18 to 60+ years.',
                    p1: 'We only work with verified employers, so employment is only official.',
                    p2: 'If you do not have a work visa or an invitation to work but you want to work - no problem, we will help you arrange all the documents.',
                    p3: 'We provide full support both at the selection stage and throughout the entire period of employment. Our coordinators will never leave you.'
                },
                contacts: {
                    title: 'Write to us now to find out more information!'
                },
                houses: {
                    title: 'A few examples of housing for our vacancies'
                },
                review: {
                    title: 'What they say about us',
                    description: 'Read reviews from customers who have already worked with us. Perhaps they will inspire you to apply for employment in our company. We, in turn, will help you with employment, housing and documents as quickly and efficiently as possible!',
                    reviews: [
                        {name: 'Kristina Goncharenko 32 years old', date: '12.12.2021', reviewText: 'Grateful to Railtok for employment, they carefully and calmly selected a vacancy, although I was frankly picky, but the manager Alexander was patient. Thanks again.'},
                        {name: 'Daria Lutsenko 56 years old', date: '15.01.2022', reviewText: 'I went to work in Poland from another agency, but I was deceived there and I had to look for a new job very quickly, they gave me Alexander\'s number. Thank you very much for your help, now I work thanks to him at a normal job.'},
                        {name: 'Ivan Krivenko 28 years old', date: '23.02.2022', reviewText: 'I will say briefly - everything is fine, the housing was better and worse, but you can work and live.'},
                        {name: 'Nursultan Abibulaev 35 years old', date: '05.03.2022', reviewText: 'I am a citizen of Kazakhstan, at first I was afraid to make documents, but I still decided and did not regret that it was through the Railtok company. They prepared the entire package of documents for obtaining a Polish work visa, they did everything as promised. Special thanks to Alexander for his attentiveness and efficiency.'},
                        {name: 'Ana and Kirill Zelenko 19 and 23 years old', date: '19.03.2022', reviewText: 'We are a couple, we went to work in France and I will tell you that we are not disappointed, but on the contrary, we are very glad that we went through this company.'},
                        {name: 'Ksenia and Vadim Aliev 35 and 41 years old', date: '30.03.2022', reviewText: 'My friend and I went to work in Poland, it was our first trip abroad, but thanks to Alexander it went very well, thank you.'},
                    ]
                },
                vacancies: {
                    title: "Popular vacancies",
                    cards: [
                        {
                            id: 1,
                            country: 'France, city of Lille',
                            title: 'Work with trees and plants',
                            sellary: '10 €/hour net',
                            description: [
                                'One person with experience working with plants is required',
                                'Pruning and planting trees, plants',
                                'Gardening',
                                'Creating gardens',
                                'Sowing and mowing lawns'
                            ],
                            schedule: '8 hours a day, 5 days a week (additional hours possible)',
                            accomodation: 'Accommodation is provided (200 euros per month)',
                            requirements: 'Desired experience working with plants',
                            food: 'Self-catering',
                        },
                        {
                            id: 2,
                            country: 'Germany, near Stuttgart',
                            schedule: '8 hours a day, 5 days a week (additional hours possible)',
                            sellary: '11 €/hour net',
                            title: 'Work in a vegetable farm on tractors',
                            description: [
                                '5 people with tractor licenses are required',
                                'Support in caring for vegetable crops',
                                'Help in sowing, weeding and fertilizing.',
                                'Help in harvesting vegetables',
                                'Use of tractors to transport vegetable crops/pipes/fertilizers to larger containers.',
                            ],
                            accomodation: 'Accommodation is provided (200 euros per month)',
                            food: 'Self-catering',
                            requirements: 'Desired experience working with tractors',

                        },
                        {
                            id: 3,
                            country: 'Poland',
                            title: 'Work at a TV manufacturing plant',
                            sellary: '25.6€ zł/hour net',
                            description: [
                                'Assembly of components on the production line and laying of materials',
                                'Transportation of trolleys to the production line',
                                'Lifting TVs and packing them in cardboard boxes',
                                'Installation of monitors in TVs',
                                'Work in the finished product packaging department with film'
                            ],
                            schedule: '8 hours a day, 5 days a week (additional hours possible)',
                            accomodation: 'Accommodation is provided free of charge',
                            requirements: 'Desired experience working with electronics',
                            food: 'Self-catering, there is a dining room',
                        },
                    ]
                },
                footer : {
                    title: 'Links to groups with vacancies',
                    link1: 'Vacancies in Poland',
                    link2: 'Vacancies in Western Europe',
                    link3: 'Vacancies in Estonia',
                },
                button: 'Contact a manager',
                features: [['Official employment', 'Verified employers', 'Vacancies for men, women, and couples', 'Vacancies under Umowa Zlecenia and Umowa o pracę terms'],
                ['Work accommodation (apartments, houses, hostels)', 'Separate rooms for couples', 'Work accommodation with children from 8 years old', 'Supplement for own accommodation'],
['Document processing', 'Polish work visa', 'Student certificate', 'Paragraph 24 in Germany', 'Registration, tax number, insurance, and bank account']]
            },
    uk:{
        header: {
            home: 'Головна',
            about: 'Про нас',
            advantages: 'Переваги',
            reviews: 'Відгуки',
            vacancies: 'Вакансії',
            contacts: 'Контакти',
         },
        heading: {
            title: 'Railtok Recruitment це компанія, яка надає роботу в багатьох країнах Євросоюзу.',
            description: 'Набридла стара робота? Хочеш змінити роботодавця? Погане житло? Маленька зарплата? Неповажне ставлення? Тоді відразу пишіть менеджеру - він підбере вакансію, яка точно вам сподобається!'
},
        about: {
            title: 'Трохи про нас',
            description: 'Наша компанія надає роботу для громадян України, Молдови, Білорусі, Центральної Азії віком від 18 до 60+ років.',
            p1: 'Ми працюємо тільки з перевіреними роботодавцями, тому працевлаштування тільки офіційне.',
            p2: 'Якщо у вас немає робочої візи або запрошення на роботу, але ви хочете працювати - немає проблем, ми допоможемо вам оформити всі документи.',
            p3: 'Ми проводимо повний супровід як на етапі підбору, так і на протязі всього періоду трудової діяльності. Наші координатори вас ніколи не залишать з невирішеним питанням.',
    },
        contacts: {
            title: 'Напишіть нам зараз, щоб дізнатися більше інформації!'
        },
        houses: {
            title: 'Декілька прикладів житла по нашим вакансіям'
        },
        review: {
            title: "Про нас говорять",
            description: 'Прочитайте відгуки клієнтів, які вже співпрацювали з нами. Можливо вони надихнуть Вас звернутися за працевлаштуванням саме в нашу компанію. Ми з свого боку допоможемо Вам з працевлаштуванням, житлом і документами максимально швидко і якісно!',
            reviews: [
                {name: 'Кристина Гончаренко 32 роки', date: '12.12.2021', reviewText: 'Вдячна компанії Railtok за трудове устройство, уважно і спокійно підбирали вакансію, хоча я була чесно кажучи вибаглива, але менеджер Олександр був терплячий. Ще раз дякую.'},
                {name: 'Дарія Луценко 56 років', date: '15.01.2022', reviewText: 'Поїхала на роботу до Польщі від іншої агенції, але мене там обманули і треба було шукати дуже швидко нову роботу, мені дали номер Олександра. Дуже дякую йому за допомогу, зараз я працюю завдяки йому на нормальній роботі.'},
                {name: 'Іван Кривенко 28 років', date: '23.02.2022', reviewText: 'Скажу коротко - все добре, житло бувало і краще, але бувало й гірше, але працювати й жити можна.'},
                {name: 'Нурсултан Абибулаев 35 років ', date: '05.03.2022', reviewText: 'Я громадянин Казахстану, спочатку боявся робити документи, але все-таки вирішився і не шкодував, що саме через компанію Railtok. Підготували весь пакет документів для отримання польської робочої візи, все зробили як і обіцяли. Окремо дякую Олександру за уважність і оперативність.'},
                {name: 'Ана і Кирило Зеленко 19 і 23 роки', date: '19.03.2022', reviewText: 'Ми сімейна пара, поїхали во Францію на роботу і скажу вам, що ми не розчаровані, а навпаки дуже раді, що поїхали через цю компанію.'},
                {name: 'Ксенія і Вадим Алієви 35 і 41 рік', date: '30.03.2022', reviewText: 'Ми з подругою поїхали на роботу до Польщі, це був наш перший виїзд за кордон, але завдяки Олександру він пройшов дуже добре, дякую.'},
            ]
        },
        vacancies: {
            title: 'Популярні вакансії',
            description: 'Виберіть вакансію, яка вас цікавить, та зв\'яжіться з менеджером для отримання додаткової інформації.',
            cards: [
                {
                    id: 1,
                    country: 'Франція, місто Лілль',
                    title: 'Робота з деревами та рослинами',
                    sellary: '10 €/год нетто',
                    description: [
                        'Потрібна одна людина з досвідом роботи з рослинами',
                        'Обрізка та посадка дерев, рослин',
                        'Догляд за садами',
                        'Створення садів',
                        'Сіяння та скошування газонів'
                    ],
                    schedule: '8 годин в день, 5 днів на тиждень (можливі додаткові години)',
                    accomodation: 'Житло надається (200 євро в місяць)',
                    requirements: 'Бажаний досвід роботи з рослинами',
                    food: 'Харчування самостійне',
                },
                {
                    id : 2,
                    country : 'Німеччина, біля міста Штутгарт',
                    schedule : '8 годин в день, 5 днів на тиждень (можливі додаткові години)',
                    sellary : '11 €/год нетто',
                    title : 'Робота в овочевому господарстві на тракторах',
                    description : [
                        'Потрібно 5 чоловіків з правами на трактор',
                        'Підтримка у догляді за овочевими культурами',
                        'Допомога у посіві, боротьбі з бур\'янами та внесенні добрив.',
                        'Допомога у збиранні овочів',
                        'Використання тракторів для перевезення овочевих культур/труб/добрив у більші контейнери.',
                    ],
                    accomodation : 'Житло надається (200 євро в місяць)',
                    food : 'Харчування самостійне',
                    requirements : 'Бажаний досвід роботи з тракторами',
                },
                {
                    id: 3,
                    country: 'Польща',
                    title: 'Робота на заводі з виготовлення телевізорів',
                    sellary: '25.6€ zł/год нетто',
                    description: [
                        'Збирання компонентів на виробничій лінії та укладання матеріалів',
                        'Транспортування візків до виробничої лінії',
                        'Підняття телевізорів та упаковка їх у картонні коробки',
                        'Встановлення моніторів у телевізори',
                        'Робота в відділі упаковки готової продукції плівкою'
                    ],
                    schedule: '8 годин в день, 5 днів на тиждень (можливі додаткові години)',
                    accomodation: 'Житло надається безкоштовно',
                    requirements: 'Бажаний досвід роботи з електронікою',
                    food: 'Харчування самостійне, є їдальня',
                },

            ]
        },
        features: [['Офіційне працевлаштування', 'Перевірені роботодавці', 'Вакансії для чоловіків, жінок та сімейних пар', 'Вакансії за умовами Umowa Zlecenia та Umowa o pracę'],
        ['Робоче житло (квартири, будинки, гуртожитки)', 'Окремі кімнати для сімейних пар', 'Робоче житло з дітьми від 8 років', 'Додаткова оплата за власне житло'],
        ['Виготовлення документів', 'Польська робоча віза', 'Довідка студента', 'Параграф 24 в Німеччині', 'Прописка, податковий номер, страхування та банківський рахунок']]
        ,
        footer: {
            title: 'Посилання на групи з вакансіями',
            link1: 'Вакансії в Польщі',
            link2: 'Вакансії в західній Європі',
            link3: 'Вакансії в Естонії',
        },
        button: 'Написати менеджеру'
    }}