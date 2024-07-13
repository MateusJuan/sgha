<?php

require __DIR__ . '/../vendor/autoload.php';

use Kreait\Firebase\Factory;

$factory = (new Factory())->withDatabaseUri('https://projeto-teste-bd-c42a1-default-rtdb.firebaseio.com/');

$database = $factory->createDatabase();
$contatos = $database->getReference('contatos')->getValue();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php if (!empty($contatos) && is_array($contatos)) : ?>
        <?php foreach ($contatos as $contato) : ?>
            <p>
                <?php if (isset($contato['nome'])) : ?>
                    Nome: <?php echo htmlspecialchars($contato['nome'], ENT_QUOTES, 'UTF-8'); ?> <br>
                <?php endif; ?>
                <?php if (isset($contato['email'])) : ?>
                    Email: <?php echo htmlspecialchars($contato['email'], ENT_QUOTES, 'UTF-8'); ?> <br>
                <?php endif; ?>
            </p>
        <?php endforeach; ?>
    <?php else : ?>
        <p>Nenhum contato encontrado.</p>
    <?php endif; ?>
</body>
</html>
