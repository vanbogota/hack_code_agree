export async function getPolicy(id) {
  return (await getPolicies()).find(policy => policy.id.toString() === id);
}

export async function getRecentPolicies() {
  return (await getPolicies()).slice(0, 10);
}

export async function getPolicies() {
  return [
    {
      id: 1000,
      url: '/policies/1000',
      type: 'Автострахование',
      startDate: '15 мая 2024',
      endDate: '14 мая 2025',
      premium: {
        amount: 1200.0,
        frequency: 'ежегодно'
      },
      coverage: {
        liability: 1000000,
        collision: 500,
        comprehensive: 250
      },
      status: 'Активен',
      customer: {
        name: 'Иван Смирнов',
        email: 'ivan.smirnov@example.com',
        address: 'ул. Главная, 123, Москва',
        country: 'Россия'
      },
      vehicle: {
        make: 'Тойота',
        model: 'Камри',
        year: 2022,
        vin: '1HGBH41JXMN109186'
      },
      policy: {
        title: 'Полис для электромобилей',
        desc: 'Мы считаем, что создание специализированного страхового пакета для электромобилей, включая покрытие домашних зарядных станций, позволит нам увеличить долю рынка среди владельцев электромобилей на 25% в течение первого года.'
      }
    },
    {
      id: 1001,
      url: '/policies/1001',
      type: 'Страхование жилья',
      startDate: '1 июня 2024',
      endDate: '31 мая 2025',
      premium: {
        amount: 950.0,
        frequency: 'ежегодно'
      },
      coverage: {
        dwelling: 500000,
        personalProperty: 250000,
        liability: 1000000
      },
      status: 'Активен',
      customer: {
        name: 'Елена Иванова',
        email: 'elena.ivanova@example.com',
        address: 'пр. Ленина, 456, Санкт-Петербург',
        country: 'Россия'
      },
      property: {
        type: 'Частный дом',
        constructionYear: 2005,
        squareFeet: 2200
      },
      policy: {
        title: 'Полис умного дома',
        desc: 'Мы предполагаем, что предоставление 5% скидки для домов с умными датчиками дыма и протечки воды снизит количество претензий по пожарам и затоплениям на 20% и повысит оценки удовлетворенности клиентов на 15%.'
      }
    },
    {
      id: 1002,
      url: '/policies/1002',
      type: 'Страхование жизни',
      startDate: '10 июля 2024',
      endDate: '9 июля 2054',
      premium: {
        amount: 75.0,
        frequency: 'ежемесячно'
      },
      coverage: {
        deathBenefit: 500000,
        cashValue: 15000
      },
      status: 'Активен',
      customer: {
        name: 'Михаил Петров',
        email: 'mikhail.petrov@example.com',
        address: 'ул. Пушкина, 789, Екатеринбург',
        country: 'Россия'
      },
      beneficiary: {
        name: 'Светлана Петрова',
        relationship: 'Супруга'
      },
      policy: {
        title: 'Полис с программой здоровья',
        desc: 'Мы полагаем, что партнерство с популярными фитнес-приложениями для предоставления скидок на страховые взносы на основе регулярных физических упражнений привлечет на 30% больше клиентов в возрасте от 25 до 40 лет, заботящихся о своем здоровье, и снизит риск смертности среди держателей полисов.'
      }
    },
    {
      id: 1003,
      url: '/policies/1003',
      type: 'Туристическое страхование',
      startDate: '5 августа 2024',
      endDate: '20 августа 2024',
      premium: {
        amount: 150.0,
        frequency: 'единовременно'
      },
      coverage: {
        medical: 1000000,
        tripCancellation: 5000,
        lostBaggage: 2000
      },
      status: 'В ожидании',
      customer: {
        name: 'Анна Козлова',
        email: 'anna.kozlova@example.com',
        address: 'ул. Гагарина, 321, Новосибирск',
        country: 'Россия'
      },
      trip: {
        destination: 'Франция',
        departureDate: '5 августа 2024',
        returnDate: '20 августа 2024'
      },
      policy: {
        title: 'Полис с динамическим ценообразованием',
        desc: 'Мы предполагаем, что внедрение модели динамического ценообразования на основе данных о безопасности места назначения в реальном времени увеличит количество приобретенных полисов на 25% и снизит коэффициент страховых выплат на 10%.'
      }
    },
    {
      id: 1004,
      url: '/policies/1004',
      type: 'Страхование бизнеса',
      startDate: '1 сентября 2024',
      endDate: '31 августа 2025',
      premium: {
        amount: 2500.0,
        frequency: 'ежегодно'
      },
      coverage: {
        propertyDamage: 1000000,
        liability: 2000000,
        businessInterruption: 500000
      },
      status: 'Активен',
      customer: {
        name: 'Роберт Волков',
        email: 'robert.volkov@example.com',
        address: 'пр. Мира, 159, Казань',
        country: 'Россия'
      },
      business: {
        name: 'ООО "Волков Консалтинг"',
        type: 'Профессиональные услуги',
        employees: 15
      },
      policy: {
        title: 'Полис кибербезопасности с обучением',
        desc: 'Мы считаем, что предоставление бесплатных образовательных ресурсов по кибербезопасности вместе с нашими полисами киберстрахования снизит количество успешных кибератак на наших клиентов из малого бизнеса на 30% и увеличит количество продлений полисов киберстрахования на 25%.'
      }
    }
  ];
}

export function getInsuranceTypes() {
  return [
    {
      name: 'Автострахование',
      code: 'AUTO',
      description: 'Покрытие для транспортных средств от несчастных случаев, кражи и ответственности.'
    },
    {
      name: 'Страхование жилья',
      code: 'HOME',
      description: 'Защита вашего дома и личного имущества.'
    },
    {
      name: 'Страхование жизни',
      code: 'LIFE',
      description: 'Финансовая защита ваших бенефициаров в случае вашей смерти.'
    },
    {
      name: 'Туристическое страхование',
      code: 'TRAVEL',
      description: 'Покрытие медицинских расходов и отмены поездки во время путешествия.'
    },
    {
      name: 'Страхование бизнеса',
      code: 'BUSINESS',
      description: 'Защита бизнеса от различных рисков и ответственности.'
    }
  ];
}
