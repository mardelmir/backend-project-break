module.exports = {
    paths: {
        "/api/products": {
            get: {
                tags: ["Products and Dashboard"],
                summary: "Get all products",
                description: "Returns a list of all products, accessible for unidentified and standard users",
                operationId: "getAllProducts",
                parameters: [],
                responses: {
                    200: {
                        description: "nº Products successfully retrieved",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/swaggerProduct" }
                            }
                        }
                    },
                    500: { description: "Error: Could not get productss" }
                }

            }
        },
        "/api/products/{_id}": {
            get: {
                tags: ["Products and Dashboard"],
                summary: "Get product by _id",
                description: "Gets single product by _id, accessible for unidentified and standard users",
                operationId: "getOneProduct",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string"
                        },
                        description: "ID of product to be retrieved"
                    }
                ],
                responses: {
                    200: {
                        description: "Product successfully retrieved",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/swaggerProduct" }
                            }
                        }
                    },
                    404: { description: "Product not found" },
                    500: { description: "Error: Could not get specified product" }
                }
            }
        },
        "/api/products/?category={category}": {
            get: {
                tags: ["Products and Dashboard"],
                summary: "Filter products by category",
                description: "Filters all existing products by the selected category. The category is specified through a query in the url. Accessible for unidentified and standard users",
                operationId: "filterProducts",
                parameters: [
                    {
                        name: "category",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string"
                        },
                        description: "Chosen category to filter products by"
                    }
                ],
                responses: {
                    200: {
                        description: "Products successfully filtered",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/swaggerProduct" }
                            }
                        }
                    }
                }
            }
        },
        "/api/dashboard": {
            post: {
                tags: ["Dashboard"],
                summary: "Create product",
                description: "Creates a new product, only accessible from '/dashboard' routes",
                operationId: "createProduct",
                parameters: [],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/swaggerProduct" }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Product successfully created",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/swaggerProduct" }
                            }
                        }
                    },
                    500: { description: "Error: Could not create product" }
                }
            },
            get: {
                tags: ["Products and Dashboard"],
                summary: "Get all products",
                description: "Returns a list of all products, this view for administrator users is the same as for unidentified or standard users",
                operationId: "getAllProducts",
                parameters: [],
                responses: {
                    200: {
                        description: "nº Products successfully retrieved",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/swaggerProduct" }
                            }
                        }
                    },
                    500: { description: "Error: Could not get productss" }
                }

            }
        },
        "/api/dashboard/{_id}": {
            get: {
                tags: ["Products and Dashboard"],
                summary: "Get product by _id",
                description: "Gets single product by _id, this view for administrator users is the same as for unidentified or standard users",
                operationId: "getOneProduct",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string"
                        },
                        description: "ID of product to be retrieved"
                    }
                ],
                responses: {
                    200: {
                        description: "Product successfully retrieved",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/swaggerProduct" }
                            }
                        }
                    },
                    404: { description: "Product not found" },
                    500: { description: "Error: Could not get specified product" }
                }
            },
            put: {
                tags: ["Dashboard"],
                summary: "Update product by _id",
                description: "Updates a product by _id, only accessible from '/dashboard' routes",
                operationId: "updateProduct",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string"
                        },
                        description: "ID of product to be updated"
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/swaggerProduct" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Product successfully updated",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/swaggerProduct" }
                            }
                        }
                    },
                    404: { description: "Product not found" },
                    500: { description: "Error: Could not update product" }
                }
            },
            delete: {
                tags: ["Dashboard"],
                summary: "Delete product by _id",
                description: "Deletes a product by _id, only accessible from '/dashboard' routes",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string"
                        },
                        description: "ID of product to be deleted"
                    }
                ],
                responses: {
                    200: {
                        description: "Product successfully deleted",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/swaggerProduct" }
                            }
                        }
                    },
                    500: { description: "Error: Could not delete product" }
                }
            }
        },
        "/api/dashboard/?category={category}": {
            get: {
                tags: ["Products and Dashboard"],
                summary: "Filter products by category",
                description: "Filters all existing products by the selected category. The category is specified through a query in the url. This view for administrator users is the same as for unidentified or standard users",
                operationId: "filterProduct",
                parameters: [
                    {
                        name: "category",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string"
                        },
                        description: "Chosen category to filter products by"
                    }
                ],
                responses: {
                    200: {
                        description: "Products successfully filtered",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/swaggerProduct" }
                            }
                        }
                    }
                }
            }
        },
    }
}