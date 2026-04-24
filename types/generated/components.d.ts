import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBadge extends Struct.ComponentSchema {
  collectionName: 'components_shared_badges';
  info: {
    displayName: 'Badge';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface SharedBrand extends Struct.ComponentSchema {
  collectionName: 'components_shared_brands';
  info: {
    displayName: 'Brand';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    src: Schema.Attribute.Text;
    type: Schema.Attribute.String;
  };
}

export interface SharedServiceCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_categories';
  info: {
    displayName: 'service-category';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.service-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_items';
  info: {
    displayName: 'service-item';
  };
  attributes: {
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.badge': SharedBadge;
      'shared.brand': SharedBrand;
      'shared.media': SharedMedia;
      'shared.service-category': SharedServiceCategory;
      'shared.service-item': SharedServiceItem;
    }
  }
}
