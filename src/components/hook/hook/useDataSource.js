import React, {useState, useEffect} from "react";

const useDataSource = (dataSource, initialValues) => {
    const [data, setData] = useState(initialValues);

    useEffect(() => {
        dataSource.addSubscriber(setData);

        return () => {
            dataSource.removeSubscriber(setData);
        }
    }, []);

    return data;
}

export default useDataSource