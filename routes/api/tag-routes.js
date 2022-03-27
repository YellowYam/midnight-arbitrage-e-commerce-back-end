const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all product tags
router.get('/', async (req, res) => {
  try {
    const productTagData = await ProductTag.findAll({
      // Includes the category and tag model objects as attributes of the response when fetching products.
      include: [{model: Tag}],
    });
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET a product tag by its id
router.get('/:id', async (req, res) => {
  try {
    const productTagData = await ProductTag.findByPk(req.params.id, {
      include: [{ model: Tag }],
    });

    if (!productTagData) {
      res.status(404).json({ message: 'No productTag found with that id!' });
      return;
    }

    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updates tag based on its tag_id
router.put('/:tag_id', (req, res) => {
  //Calls the update method on the Tag model
  Tag.update(
    {
      // All the fields you can update and the data attached to the request body.
      tag_name: req.body.tag_name
    },
    {
      // Gets a tag based on the tag_id given in the request parameters
      where: {
        tag_id: req.params.tag_id,
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete('/:id', async (req, res) => {
  try {
    const productTagData = await ProductTag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productTagData) {
      res.status(404).json({ message: 'No productTag found with that id!' });
      return;
    }

    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
