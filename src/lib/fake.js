export default function generateFakeData() {
    const data = []

    for (let i = 25; --i;) {
        data.push({
            id: i,
            name: "Kirima",
            city: "Nuuk"
        })
    }

    return data;
}