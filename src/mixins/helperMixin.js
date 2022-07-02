export default {
    data() {
        return {
            items: [{
                    src: "/images/slider/IMG_0002.jpg"
                },
                {
                    src: "/images/slider/IMG_0028.jpg",
                },
                {
                    src: "/images/slider/IMG_0036.jpg",
                },
                {
                    src: "/images/slider/IMG_0059.jpg",
                },
                {
                    src: "/images/slider/IMG_0023_1.jpg",
                },
                {
                    src: "/images/slider/IMG_0016.jpg",
                },
                {
                    src: "/images/slider/IMG_0014_1.jpg",
                },
                {
                    src: "/images/slider/IMG_0010_1.jpg",
                },
                {
                    src: "/images/slider/IMG_0004_1.jpg",
                },
            ],
            socialLinksHome: [{
                    id: 1,
                    src: 'images/home/facebook.png',
                    name: 'Facebook'
                },
                {
                    id: 2,
                    src: 'images/home/twwiter.png',
                    name: 'Twitter'
                },
                {
                    id: 3,
                    src: 'insta.png',
                    name: 'Instagram'
                },
            ],
            items2: [{
                    id: 1,
                    name: this.$t('About'),
                },
                {
                    id: 2,
                    name: 'Creations',
                    children: [{
                            id: 3,
                            name: this.$t('Plants'),
                        },
                        {
                            id: 4,
                            name: 'Shells',
                        },
                    ]
                },
                {
                    id: 5,
                    name: 'Passion',
                },
                {
                    id: 6,
                    name: 'Inspiration'
                },
                {
                    id: 7,
                    name: 'Precision'
                },
                {
                    id: 8,
                    name: 'Perfection'
                },
                {
                    id: 9,
                    name: 'Contact',
                }
            ],
            itemContent: [{
                id: 1,
                // header: 'SIAVASH HOUMAN',
                contents: [{

                    content: this.$t('AboutContent'),
                    // moreContent: 'This means dried parts of natural plants and various forms that it could take on and use to create some really incredible stuff!',
                    src: '/images/menu/siavashhouman.jpeg',
                }, ]
            }]
        }
    }
}