import React, { useContext } from 'react';
import CrudContext from '../context/CrudContext';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
    const {db, loading, error} = useContext(CrudContext);

    return (
        <div>
            <h2>CRUD API con ContextAPI</h2>
            <article className="grid-1-2">
                <CrudForm></CrudForm>
                {loading && <Loader></Loader>}
                {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"></Message>}
                {db && <CrudTable></CrudTable>}
            </article>
        </div>
    );
};

export default CrudApi;