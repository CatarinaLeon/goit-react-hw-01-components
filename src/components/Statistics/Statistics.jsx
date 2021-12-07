import dataM from '../../data/data.json';
import Title from '../Statistics/Title/Title';
import Statis from '../Statistics/Statis/Statis';


const Statistics = () => {
    return (
        <section>
            <Title title="Upload stats" />

            <div>
                {dataM.map((list) => (
                    <Statis key={list.id} stats={list} />
                ))}
            </div>
        </section>
    );
};

export default Statistics;
