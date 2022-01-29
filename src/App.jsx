import generateFakeData from './lib/fake.js'
import moment from 'moment'




export default function App() {
const data = generateFakeData()

// console.log({ data })

return (
<main>
     {/* {data.map(word => <li>{word.city+" " +word.id+ word.name}</li>) } */}
</main>
)
}

