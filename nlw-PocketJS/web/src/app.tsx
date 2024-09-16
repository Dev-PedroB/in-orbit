import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
import { EmptyGoals } from './components/empty-goals'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  //FETCH DA FORMA TRADICIONAL
  // const [summary, setSummary] = useState<SummaryResponse | null>(null)

  // useEffect(() => {
  //   fetch('http://localhost:3333/summary')
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setSummary(data.summary)
  //     })
  // }, [])

  //FETCH COM TANSTACK QUERY
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
