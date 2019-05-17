//go:generate go run github.com/99designs/gqlgen

package accelerate_to_zero

import (
	"context"
) // THIS CODE IS A STARTING POINT ONLY. IT WILL NOT BE UPDATED WITH SCHEMA CHANGES.

type Resolver struct {
	companies []*Company
}

func (r *Resolver) Query() QueryResolver {
	return &queryResolver{r}
}

type queryResolver struct{ *Resolver }

func (r *queryResolver) Companies(ctx context.Context) ([]*Company, error) {
	one := &Company{ID: "78787878", Name: "Shell"}
	two := &Company{ID: "121212121", Name: "Green Company"}
	comps := []*Company{one, two}
	return comps, nil
	// return r.companies, nil
}
