// @flow

// Type $Shape<T> has two differences from T: objects of this type
// cannot contain properties not described in T and may not contain
// required properties of type T.

// short: part of properties and make it exact obj

type Page = {
	name: string,
	path: string,
}

type PageShape = $Shape<Page>

const page: $Shape<Page> = { name: 'test', path: 'test' }
