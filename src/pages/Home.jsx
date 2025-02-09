
import Table from "../components/Table";
import Card from "../components/Card";

const Home = () => {
    const apiUrl = 'http://127.0.0.1:8000/api/homes'; // Replace with your API URL
    const headers = ['Name', 'Amount'];
    const fields = ['name', 'amount'];

    return (
        <>
            <div className="w-3/4 mx-auto">
                <Card />
                <h1>Hallo Ini halaman HOME</h1>
                <Table apiUrl={apiUrl} headers={headers} fields={fields} />
            </div>
        </>
    );
};

export default Home;