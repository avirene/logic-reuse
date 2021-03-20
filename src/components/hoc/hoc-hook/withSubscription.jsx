import React, { useEffect, useState } from "react";

const withSubscription = (WrappedComponent, observable, initialDataGetter) => {
  return function DataSubscriber(props) {
    const data = [];
    // FIXME: using hooks recreate what class version does!

    return <WrappedComponent data={data} {...props} />;
  };
};

export default withSubscription;
