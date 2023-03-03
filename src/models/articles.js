// Les schémas
const articleSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    content: String,
});

// Creation de model
const Article = mongoose.model("Article", articleSchema);

