import CardNotas from './CardNotas'
import CardPendencias from './CardPendencias'
export default function Cards() {
    return (
        <div className="grid h-full w-full p-2 sm:p-8 gap-4 items-start overflow-y-auto sm:overflow-y-none lg:container sm:grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
            <CardPendencias/>
            <CardNotas/>
            <div className='h-fit'>
            </div>

        </div>
    )}