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
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
      'shared.service-category': SharedServiceCategory;
      'shared.service-item': SharedServiceItem;
    }
  }
}
