export const useRestaurantSchema = () => {
  const baseUrl = 'https://ekimovde.github.io/forest-rest';

  useSchemaOrg([
    {
      '@type': 'Restaurant',
      '@id': `${baseUrl}/#restaurant`,
      'name': 'Forest Rest',
      'description': 'Ресторан изысканной кухни с доставкой. Свежие продукты, авторские блюда, уютная атмосфера.',
      'url': baseUrl,
      'telephone': '+7-914-808-55-50',
      'image': `${baseUrl}/og-image.jpg`,
      'servesCuisine': [
        'Европейская',
        'Итальянская',
        'Японская',
        'Русская'
      ],
      'priceRange': '$$',
      'acceptsReservations': true,
      'hasMenu': `${baseUrl}/menu`,
      'menu': `${baseUrl}/menu`,
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'RU',
        'addressLocality': 'Чита',
        'streetAddress': 'Улица Виля Липатова 7, 2 этаж',
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ],
          'opens': '10:00',
          'closes': '23:00'
        }
      ],
      'potentialAction': {
        '@type': 'OrderAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': `${baseUrl}/cart`,
          'actionPlatform': [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform'
          ]
        }
      }
    }
  ]);
};
