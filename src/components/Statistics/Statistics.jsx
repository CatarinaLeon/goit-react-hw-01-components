import dataM from '../../data/data.json';
import Title from '../Statistics/Title/Title';
import Statis from '../Statistics/Statis/Statis';
import st from "../Statistics/Statistics.module.css";

const Statistics = () => {
    return (
        <section className={st.statistics}>
            <Title title="Upload stats" />

            <div className={st.wrap}>
                {dataM.map((list) => (
                    <Statis key={list.id} stats={list} />
                ))}
            </div>
        </section>
    );
};

export default Statistics;
