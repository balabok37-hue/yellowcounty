import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';

interface SpecsEditorProps {
  specs: Record<string, string>;
  onChange: (specs: Record<string, string>) => void;
}

const commonSpecs = [
  'engine',
  'power',
  'weight',
  'bucketCapacity',
  'maxDiggingDepth',
  'maxReach',
  'maxDumpingHeight',
  'travelSpeed',
  'fuelTank',
  'hydraulicTank',
  'transportDimensions',
];

export default function SpecsEditor({ specs, onChange }: SpecsEditorProps) {
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');

  const handleAdd = () => {
    if (newKey && newValue) {
      onChange({ ...specs, [newKey]: newValue });
      setNewKey('');
      setNewValue('');
    }
  };

  const handleUpdate = (key: string, value: string) => {
    onChange({ ...specs, [key]: value });
  };

  const handleDelete = (key: string) => {
    const { [key]: _, ...rest } = specs;
    onChange(rest);
  };

  const handleAddCommon = (key: string) => {
    if (!specs[key]) {
      onChange({ ...specs, [key]: '' });
    }
  };

  const formatLabel = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Specifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {commonSpecs.filter(key => !specs[key]).map((key) => (
            <Button
              key={key}
              variant="outline"
              size="sm"
              onClick={() => handleAddCommon(key)}
            >
              <Plus className="mr-1 h-3 w-3" />
              {formatLabel(key)}
            </Button>
          ))}
        </div>

        <div className="space-y-3">
          {Object.entries(specs).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              <Input
                value={key}
                disabled
                className="w-1/3 bg-muted"
              />
              <Input
                value={value}
                onChange={(e) => handleUpdate(key, e.target.value)}
                className="flex-1"
                placeholder="Enter value..."
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(key)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-4 border-t">
          <Input
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            placeholder="Spec name (e.g. maxSpeed)"
            className="w-1/3"
          />
          <Input
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            placeholder="Value (e.g. 25 mph)"
            className="flex-1"
          />
          <Button onClick={handleAdd} disabled={!newKey || !newValue}>
            <Plus className="mr-2 h-4 w-4" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
