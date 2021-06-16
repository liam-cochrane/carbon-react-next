module.exports = {
    async redirects() {
        return [
            {
                source: '/companies/:id',
                destination: '/companies/:id/details',
                permanent: true,
            },
            {
                source: '/opportunities/:id',
                destination: '/opportunities/:id/details',
                permanent: true,
            },
        ];
    },
};
