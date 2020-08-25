import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
    const router = useRouter();
    const { query: { id } } = router;
    return(
        <div>
            Product: {id}
        </div>
    )
};

export default ProductItem;