/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
}

export interface NexusGenObjects {
  Author: { // root type
    fullName: string; // String!
    id: number; // Int!
  }
  Book: { // root type
    id: number; // Int!
  }
  Edition: { // root type
    description?: string | null; // String
    id: number; // Int!
    title: string; // String!
  }
  Query: {};
  Review: { // root type
    body: string; // String!
    id: number; // Int!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Author: { // field return type
    books: NexusGenRootTypes['Book'][]; // [Book!]!
    fullName: string; // String!
    id: number; // Int!
  }
  Book: { // field return type
    authors: NexusGenRootTypes['Author'][]; // [Author!]!
    editions: NexusGenRootTypes['Edition'][]; // [Edition!]!
    id: number; // Int!
    publishedIn: string; // String!
  }
  Edition: { // field return type
    book: NexusGenRootTypes['Book']; // Book!
    description: string | null; // String
    id: number; // Int!
    lang: string; // String!
    publishedIn: string; // String!
    reviews: NexusGenRootTypes['Review'][]; // [Review!]!
    title: string; // String!
  }
  Query: { // field return type
    author: NexusGenRootTypes['Author'] | null; // Author
    book: NexusGenRootTypes['Book'] | null; // Book
    books: Array<NexusGenRootTypes['Book'] | null>; // [Book]!
    edition: NexusGenRootTypes['Edition'] | null; // Edition
    review: NexusGenRootTypes['Review'] | null; // Review
    reviews: Array<NexusGenRootTypes['Review'] | null>; // [Review]!
  }
  Review: { // field return type
    body: string; // String!
    createdAt: string; // String!
    edition: NexusGenRootTypes['Edition']; // Edition!
    id: number; // Int!
    lang: string; // String!
    updatedAt: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Author: { // field return type name
    books: 'Book'
    fullName: 'String'
    id: 'Int'
  }
  Book: { // field return type name
    authors: 'Author'
    editions: 'Edition'
    id: 'Int'
    publishedIn: 'String'
  }
  Edition: { // field return type name
    book: 'Book'
    description: 'String'
    id: 'Int'
    lang: 'String'
    publishedIn: 'String'
    reviews: 'Review'
    title: 'String'
  }
  Query: { // field return type name
    author: 'Author'
    book: 'Book'
    books: 'Book'
    edition: 'Edition'
    review: 'Review'
    reviews: 'Review'
  }
  Review: { // field return type name
    body: 'String'
    createdAt: 'String'
    edition: 'Edition'
    id: 'Int'
    lang: 'String'
    updatedAt: 'String'
  }
}

export interface NexusGenArgTypes {
  Query: {
    author: { // args
      id?: string | null; // ID
    }
    book: { // args
      id?: string | null; // ID
    }
    edition: { // args
      id?: string | null; // ID
    }
    review: { // args
      id?: string | null; // ID
    }
    reviews: { // args
      bookId?: string | null; // ID
      editionId?: string | null; // ID
      lang?: string | null; // String
    }
  }
  Review: {
    edition: { // args
      id?: string | null; // ID
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}