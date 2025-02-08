
// import 'App.'
// import Navbar from './components/Navbar'

import Table from "../components/Table";

function Home() {
    const apiUrl = 'http://127.0.0.1:8000/api/categories'; // Replace with your API URL
    const headers = ['Name', 'amount'];
    const fields = ['name', 'amount'];

    return (
        <>
            <h1>Hallo Ini halaman HOME</h1>
            <Table apiUrl={apiUrl} headers={headers} fields={fields} />
        </>
    )
}

export default Home
