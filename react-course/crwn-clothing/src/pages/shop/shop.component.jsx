import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { selectCollections } from '../../redux/shop/shop.selectors'

const ShopPage = ({ collections }) => (
    <div className="shop-page">
        {collections.map(({id, ...collectionProps}) => (
            <CollectionPreview key={id} {...collectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);